import { useContext, useEffect } from "react"

import { api } from "../services/apiClient";
import { setupAPIClient } from "../services/api";

import { useCan } from "../hooks/useCan";
import { AuthContext } from "../contexts/AuthContext";

import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  const userCanSeeMetrics = useCan({
    permissions: ['metrics.list']
  });

  console.log(userCanSeeMetrics);

  useEffect(() => {
    api.get('/me')
      .then(response => console.log('response', response))
      .catch(err => console.log(err))
  }, []);

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>

      { userCanSeeMetrics && <div>Métricas</div> }
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get('/me');

  console.log(response.data);

  return {
    props: {}
  }
});