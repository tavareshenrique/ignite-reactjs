import { query as q } from "faunadb"
import { fauna } from "../../../services/fauna"
import { stripe } from "../../../services/stripe"

export async function saveSubscription(
  subscriptionId: string,
  customerId: string,
  isCreateAction = false
) {
  console.log(subscriptionId, customerId)
  // search in db for customer with customerId
  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(
        q.Match(
          q.Index("user_by_stripe_customer_id"),
          customerId
        )
      )
    )
  )

  console.log(userRef)

  // save subscription data to fauna db
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  console.log(subscription)

  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id
  }

  console.log(subscriptionData)

  if (isCreateAction) {
    await fauna.query(
      q.Create(
        q.Collection("subscriptions"),
        { data: subscriptionData }
      )
    )
  } else {
    const getSubscriptionRef = q
      .Select(
        "ref",
        q.Get(
          q.Match(
            q.Index("subscription_by_id"),
            subscriptionId
          )
        )
      )
    await fauna.query(
      q.Replace(
        getSubscriptionRef,
        {
          data: { subscriptionData }
        }
      )
    )
  }
}