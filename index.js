const data = 'https://api.escuelajs.co/api/v1/products'

const getData = async () => {
  //   const fetchData = await fetch(`${data}`)
  const fetchData = await fetch('https://fakestoreapi.com/products')
  const result = await fetchData.json()
  console.log(result)

  let item = ''
  result.forEach((val) => {
    // item = val.price
    item += `<div class="col">
   <div class="card" style="width: 15rem;">
	   <img class="card-img" 
		   src=${val.image} class="card-img-top"
		   alt="...">
	   <div class="card-body">
		   <h5 class="card-title">${val.title.slice(0, 20)}</h5>
		   <p class="card-text">${val.description.slice(0, 20)}.</p>
		   <a href="#" class="btn btn-primary">Go somewhere</a>
	   </div>
   </div>
</div>`

    document.getElementById('alldata').innerHTML = item
  })
}

getData()
