import useFetch from "../hooks/useFetch";


const List = ({openDetail}) => {
	const [{data, error, loading}] = useFetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")

	if (loading) return <h1>Загрузка...</h1>

    return (
		<div className="card" style={{width: "18rem"}}>
			<ul className="list-group list-group-flush">
				{data.map((item) => {
					return(
						<li 
							key={item.id} 
							className="list-group-item"
							onClick={()=>openDetail(item.id)}
						>
							{item.name}
						</li>
					)
				})}
			</ul>
		</div>
    )
}


export default List;