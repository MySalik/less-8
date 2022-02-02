import React, { useEffect, useState } from 'react';
import Details from './components/Details'
import List from './components/List'


const App = () => {
	const [intDetail, setDetail] = useState(null)

	const openDetail = (id) => {
		setDetail(id)
	}

	return(
		<div className='container'>
			<div className='row'>
				<div className='col-6'>
					<List openDetail={openDetail} />
				</div>
				<div className='col-6'>
					{intDetail
						? <Details id={intDetail} />
						: null
					}
				</div>
			</div>
		</div>
	)
}


export default App;
