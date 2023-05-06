import React from "react";
import './HomeSection.css'
export default function HomeSection() {
  return (
    <>
    <div className="search-form mt-12">
      <div class="container shadow-gray-500 shadow-2xl border rounded-lg  text-center justify-center">
        <h2 class="mx-2 my-5 text-center text-4xl banner-heading">
          FIND YOUR <span className="text-warning"> DESIRED</span> HOME TUTOR
        </h2>
        <form
          method="get"
        //   action="https://thetutors.pk/tutors"
        >
          <div class="grid grid-cols-2 gap-4">
            <div class="mb-2 p-lr-5">
              <input
                className="px-16 py-2 border rounded-lg"
                style={{ width: "281.646px;" }}
                type="text"
                // class="form-control pac-target-input"
                // id="location-1"
                placeholder="Your Location"
                name="location"
                autocomplete="off"
              />
              <input type="hidden" name="latitude" value="" />
              <input type="hidden" name="longitude" value="" />
            </div>

            <div class="mb-2 p-lr-5">
              <select
                data-placeholder="Select Class"
                placeholder="Select Class"
                class="form-control select2 select2-hidden-accessible"
                id="searchbar-classes"
                name="class"
                tabindex="-1"
                aria-hidden="true"
              >
                <option selected disabled>Select Class</option>
                <option value="pg">PG</option>
                <option value="nursery">NURSERY</option>
                <option value="prep">Prep</option>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
                <option value="four">Four</option>
                <option value="five">Five</option>
                <option value="six">Six</option>
                <option value="seven">Seven</option>
                <option value="eight">Eight</option>
                <option value="nine">Nine</option>
                <option value="matric">Matric</option>
                <option value="ics">ICS</option>
                <option value="fa">FA</option>
                <option value="i-com">I.Com</option>
                <option value="o-level">O-Level</option>
                <option value="a-level">A-Level</option>
                <option value="fsc-eng">FSc-Eng</option>
                <option value="fsc-med">FSc-Med</option>
              </select>
              <span
                className="select2 select2-container select2-container--default"
                dir="ltr"
                style={{ width: "281.646px;" }}
              >
                <span class="selection">
                  <span
                    class="select2-selection select2-selection--single"
                    aria-haspopup="true"
                    aria-expanded="false"
                    tabindex="0"
                    aria-labelledby="select2-searchbar-classes-container"
                  >
                    <span
                      class="select2-selection__rendered"
                      id="select2-searchbar-classes-container"
                    >
                      <span class="select2-selection__placeholder">
                        Select Class
                      </span>
                    </span>
                    <span class="select2-selection__arrow" role="presentation">
                      <b role="presentation"></b>
                    </span>
                  </span>
                </span>
                <span class="dropdown-wrapper" aria-hidden="true"></span>
              </span>
            </div>
            <div class="mb-2 p-lr-5">
            <select
                data-placeholder="Select Subjects"
                class="form-control select2 select2-hidden-accessible"
                multiple=""
                id="searchbar-subjects"
                name="subjects[]"
                tabindex="-1"
                aria-hidden="true"
            >
                <option selected disabled>First Select Class</option>
                <option value="all">All</option>
                <option value="english">English</option>
                <option value="urdu">Urdu</option>
                <option value="math">Math</option>
                <option value="science">Science</option>
                <option value="islamiyat">Islamiyat</option>
                <option value="pak-studies">Pak Study</option>
                <option value="history">History</option>
                <option value="geography">Geography</option>
                <option value="biology">Biology</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="computer">Computer</option>
                <option value="accounting">Accounting</option>
                <option value="stat">Stat</option>
                <option value="economics">Economics</option>
                <option value="business-study">Busines Study</option>
                <option value="psychology">Psychology</option>
                <option value="sociology">Sociology</option>
                <option value="commerce">Commerce</option>
            </select>
            <span
                class="select2 select2-container select2-container--default"
                dir="ltr"
                style={{ width: "281.646px;" }}
            >
                <span class="selection">
                <span
                    class="select2-selection select2-selection--multiple"
                    aria-haspopup="true"
                    aria-expanded="false"
                    tabindex="-1"
                >
                    <ul class="select2-selection__rendered">
                    <li class="select2-search select2-search--inline">
                        <input
                        class="select2-search__field"
                        type="search"
                        tabindex="0"
                        autocomplete="off"
                        autocorrect="off"
                        autocapitalize="off"
                        spellcheck="false"
                        aria-autocomplete="list"
                        placeholder="Select Subjects"
                        style={{ width: "280.312px;" }}
                        />
                    </li>
                    </ul>
                </span>
                </span>
                <span className="dropdown-wrapper" aria-hidden="true"></span>
            </span>
            </div>

            <div className="mb-2 p-lr-5">
              <button type="submit" className="text-white bg-green-600 hover:bg-green-500 w-full py-2 px-6 rounded">
                <i className="fa fa-search pr-2"></i> Find Tutors
              </button>
            </div>
          </div>
        </form>
      </div>
     </div>
    </>
  );
}
