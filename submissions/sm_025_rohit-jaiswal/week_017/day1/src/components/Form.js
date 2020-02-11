import React from "react";
export default class Forms extends React.Component {
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-2 text-center text-danger">
              <b>Movie Entery Database</b>
            </h1>

            <p class="lead text-center text-primary">
              <b>This is an assigned task of W17D1Ev</b>
            </p>
          </div>
          <div class="container-fluid">
            <div class="row float-right">
              <div class="col">
                <div class="input-group input-group-sm mb-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">
                      Search Here
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                  <button type="button" class="btn btn-danger btn-sm ml-2">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <form class="m-3">
            <h1 class="text-center mb-3">Movie Details</h1>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon3">
                  Enter Movie Name:
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">Summarise The Movie Here</span>
              </div>
              <textarea
                class="form-control"
                aria-label="With textarea"
                placeholder="maximum word limit: 200 words"
              ></textarea>
            </div>
            <div class="input-group mt-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">
                  Select Actors:
                </label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">Joaquin Phoenix</option>
                <option value="2">Leonardo DiCaprio</option>
                <option value="3">Benedict Cumberbatch</option>
                <option value="3">Johnny Depp</option>
                <option value="3">Al Pacino</option>
                <option value="3">Robert De Niro</option>
                <option value="3">Kevin Spacey</option>
                <option value="3">Denzel Washington</option>
                <option value="3">Brad Pitt</option>
              </select>
            </div>
            <div class="input-group mt-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">
                  Select Actresses:
                </label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">Julia Roberts</option>
                <option value="2">Katharine Hepburn</option>
                <option value="3">Jessica Lange</option>
                <option value="4">Meryl Streep</option>
                <option value="5">Elizabeth Taylor</option>
                <option value="6">Cate Blanchett</option>
                <option value="7">Bette Davis.</option>
                <option value="8">Glenn Close.</option>
                <option value="9">Haily Baldwin</option>
              </select>
            </div>

            <div class="input-group mt-3">
              <div class="input-group-prepend" placeholder="rohit">
                <span class="input-group-text" id="basic-addon3">
                  Enter Movie Poster Url:
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
            <div class="input-group mt-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Enter:</span>
              </div>
              <input
                type="number"
                aria-label="First name"
                class="form-control"
                placeholder="IMBd Score"
              />
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Year of Release...</option>
                <option value="1">2010</option>
                <option value="2">2011</option>
                <option value="3">2012</option>
                <option value="4">2013</option>
                <option value="5">2014</option>
                <option value="6">2015</option>
                <option value="7">2016</option>
                <option value="8">2017</option>
                <option value="9">2018</option>
                <option value="10">2019</option>
                <option value="11">2020</option>
              </select>
            </div>
            <form>
              <div class="form-row">
                <div class="col-10">
                  <div class="input-group mt-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Language:
                      </label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                      <option value="1">English</option>
                      <option value="2">Spanish</option>
                      <option value="3">French</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <small
                    id="emailHelp"
                    class="form-text text-muted mt-4 float-right"
                  >
                    <div class="form-group form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />

                      <label class="form-check-label" for="exampleCheck1">
                        <b>"R" rated?</b>
                      </label>
                    </div>
                  </small>
                </div>
              </div>
            </form>

            <button type="button" class="btn btn-danger btn-block">
              <b>Submit</b>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
