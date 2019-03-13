import React from 'react'


class News extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
    this.getData = this.getData.bind(this)
    this.dataArray = this.dataArray.bind(this)
  }

  componentDidMount() {
    let promise = this.getData()
    promise.then(response => {
      let allData = this.dataArray(JSON.parse(response))
      this.setState({
        items: allData
      })
    })
  }

  dataArray(jsonBody) {
    let allData = []
    for (let i = 0; i < jsonBody.body.data.length; i++) {
      let newFurniture = {
        id: jsonBody.body.data[i].id,
        name: jsonBody.body.data[i].name,
        image: jsonBody.body.data[i].imageUrl,
        description: jsonBody.body.data[i].description,
        colors: jsonBody.body.data[i].colors,
        type: jsonBody.body.data[i].type,
        deliverable: jsonBody.body.data[i].deliverable,
        cost: jsonBody.body.data[i].cost,
        stock: jsonBody.body.data[i].stock
      }
      allData.push(newFurniture)
    }
    return allData
  }

  getData() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest()

      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response)
        } else {
          reject(Error(request.statusText))
        }
      }
      request.open('GET', 'https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture', true)
      request.send()
    })
  }

  render() {
    console.log(this.state.items)
    return (
      <div>

        <style jsx>{`
              .image {
                height: 100px;
                width: auto;
              }
              li{
                list-style-type: none;
              }
              .border{
                border: 2px solid gray;
                padding: 4px;
                margin-left: 0;
                margin-bottom: 5px;
                border-radius: 5px;
                width: 80%;
                background-image: linear-gradient(skyblue, white);
              }
              .newsHeader {
                font-size: 6rem;
              }
            `}
        </style>
        <div>
          <h3 className='newsHeader'>News Feed</h3>
          <ul>
            {this.state.items.map(item => (
              <li className="border">
                <strong>{item.name}</strong>
                <br />
                <img className='image' src={item.image} alt={item.type} />
                <br />
                {item.description}
                <br />
                {item.cost}
              </li>

            ))}
          </ul>
        </div>
      </div>
    )
  }
}



export default News;