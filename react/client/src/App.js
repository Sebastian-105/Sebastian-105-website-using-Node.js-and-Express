import React from "react"

class App extends React.Component {
  state = {
    name: ""
  }

  componentDidMount() {
    fetch("https://ominous-space-goldfish-x46pppxxwqvcvrqj-3000.app.github.dev/")
      .then(res => res.json())
      .then(data => this.setState({ name: data.name }))
  }

  render() {
    return (
      <h1>Hello Sebastian!</h1>
    )
  }
}

export default App