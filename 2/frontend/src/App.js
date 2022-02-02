import React, { useEffect, useState } from 'react';
import useJsonFetch from "./hooks/useJsonFetch"

const url = "http://localhost:7070/data" //- успешное получение данных
const url = "http://localhost:7070/error" //- получение 500 ошибки
const url = "http://localhost:7070/loading" //- индикатор загрузки


const App = () => {
	const [{data, error, loading}] = useJsonFetch(url)

	if (loading) return <h1>Загрузка...</h1>

	return(
		<>
			{data
				? <h1>Данные успешно получены!</h1>
				: <h1>Здесь ошибка с кодом - {error}</h1>
			}
		</>
	)
}


export default App;
