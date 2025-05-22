import useFetch from "../CustomHooks/useFetch";

const CustomHooksExample1 = () => {
	const {data, loading} = useFetch('https://jsonplaceholder.typicode.com/posts', {});

	if (loading) {
		return <h1>Loading...</h1>
	}

  return <div>
	{data.map(post => (
		<h3 key={post.id}>{post.title}</h3>
	))}
  </div>
}

export default CustomHooksExample1;
