import axios from "axios";
import {
  QueryClient,
  useMutation,
  QueryClientProvider,
  useQuery,
} from "react-query";

const queryClient = new QueryClient();

const QueryProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

const Home = () => {
  const { isLoading, error, data } = useQuery("counter", async () =>
    axios.get("/api/counter")
  );

  const mutation = useMutation(() => axios.post("/api/counter"), {
    onSuccess: (data) => {
      queryClient.setQueryData("counter", data);
    },
  });

  if (isLoading || mutation.isLoading) return "Loading...";

  if (error || mutation.isError) return "An error has occurred 😭";

  const { value } = data.data;
  return (
    <div className="container">
      <h1>{`Counter: ${value}`}</h1>
      <button className="counterBtn" onClick={mutation.mutate}>
        Increment Counter
      </button>
    </div>
  );
};

export default QueryProvider;
