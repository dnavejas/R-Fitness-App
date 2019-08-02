import React, { Component } from "react";
import { doAjaxThings } from "../javascript/google-sheets";

class WorkoutPosts extends Component {
  constructor(props) {
    super(props);

    this.state = { GoogleSheetsData: [] };

    // state google data
    this.getGoogleSheetData = this.getGoogleSheetData.bind(this);
  }

  async componentDidMount() {
    await this.getGoogleSheetData();
  }

  async getGoogleSheetData() {
    const data = await doAjaxThings();

    // console.dir(parsedData.values);

    this.setState({
      GoogleSheetsData: data
    });
    console.log(this.state.GoogleSheetsData);
  }

  render() {
    return (
      <div>
        {this.state.GoogleSheetsData.map(item => {
          // console.log(item);

          return <div>{item}</div>;
        })}
      </div>
    );
  }
}

export default WorkoutPosts;
