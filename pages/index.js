import React from "react";
// import ReactQuill from "react-quill";
import editorStyle from "react-quill/dist/quill.snow.css";

const   modules =  {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
}

class App extends React.Component {
  static async getInitialProps({ req, isServer }) {
    if (!isServer) {
      // this.quill = require('react-quill')
    }
    return {};
  }
  constructor(props) {
    super(props);
    if (typeof window !== "undefined") {
      this.ReactQuill = require("react-quill");
    }
    this.state = { text: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    const ReactQuill = this.ReactQuill;
    if (ReactQuill) {
      return (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: editorStyle
            }}
          />
          <ReactQuill value={this.state.text} onChange={this.handleChange} modules={modules}/>
        </div>
        // <div> Hello </div>
      );
    } else {
      return null;
    }
  }
}
export default App;
