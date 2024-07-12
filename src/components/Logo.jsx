import PropTypes from 'prop-types';

export function Logo({ className, clickHandler }) {
  return (
    <div className={`logo ${className}`} onClick={() => clickHandler()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1500"
        height="1556"
        viewBox="0 0 1500 1556"
      >
        <g transform="matrix(1,0,0,1,1.5535714285715585,0.6299595141699683)">
          <svg
            viewBox="0 0 238 247"
            preserveAspectRatio="xMidYMid meet"
            height="1556"
            width="1500"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="tight-bounds"
              transform="matrix(1,0,0,1,-0.24650000000002592,-0.09999999999999432)"
            >
              <svg viewBox="0 0 238.49265164835165 247.2" height="247.2" width="238.49265164835165">
                <g>
                  <svg></svg>
                </g>
                <g>
                  <svg
                    viewBox="0 0 238.49265164835165 247.2"
                    height="247.2"
                    width="238.49265164835165"
                  >
                    <g transform="matrix(1,0,0,1,0,47.215199999999996)">
                      <svg
                        viewBox="0 0 238.49265164835165 152.7696"
                        height="152.7696"
                        width="238.49265164835165"
                      >
                        <g>
                          <svg
                            viewBox="0 0 238.49265164835165 152.7696"
                            height="152.7696"
                            width="238.49265164835165"
                          >
                            <g>
                              <svg
                                viewBox="0 0 238.49265164835165 152.7696"
                                height="152.7696"
                                width="238.49265164835165"
                              >
                                <g>
                                  <svg
                                    viewBox="0 0 238.49265164835165 152.7696"
                                    height="152.7696"
                                    width="238.49265164835165"
                                  >
                                    <g id="textblocktransform">
                                      <svg
                                        viewBox="0 0 238.49265164835165 152.7696"
                                        height="152.7696"
                                        width="238.49265164835165"
                                        id="textblock"
                                      >
                                        <g>
                                          <svg
                                            viewBox="0 0 238.49265164835165 152.7696"
                                            height="152.7696"
                                            width="238.49265164835165"
                                          >
                                            <g transform="matrix(1,0,0,1,0,0)">
                                              <svg
                                                width="238.49265164835165"
                                                viewBox="4.52 -35.55 55.489999999999995 35.55"
                                                height="152.7696"
                                              >
                                                <path
                                                  d="M25.46-35.55L4.52-35.55 4.52-30.69 11.94-30.69 11.94-4.83 4.52-4.83 4.52 0 25.46 0 25.46-4.83 17.87-4.83 17.87-30.69 25.46-30.69 25.46-35.55ZM39.52-11.11L43.36-15.41 52.98 0 60.01 0 47.24-19.9 59.4-35.55 52.22-35.55 42.84-23.14 39.52-18.82 39.52-35.55 33.59-35.55 33.59 0 39.52 0 39.52-11.11Z"
                                                  opacity="1"
                                                  transform="matrix(1,0,0,1,0,0)"
                                                  fill="#ffffff"
                                                  className="wordmark-text-0"
                                                  id="text-0"
                                                ></path>
                                              </svg>
                                            </g>
                                          </svg>
                                        </g>
                                      </svg>
                                    </g>
                                  </svg>
                                </g>
                                <g></g>
                              </svg>
                            </g>
                          </svg>
                        </g>
                      </svg>
                    </g>
                    <path
                      d="M0 41.215L0 1 238.493 1 238.493 41.215 224.716 41.215 224.716 14.777 13.777 14.777 13.777 41.215 0 41.215M0 205.985L0 246.2 238.493 246.2 238.493 205.985 224.716 205.985 224.716 232.423 13.777 232.423 13.777 205.985 0 205.985"
                      fill="#ffffff"
                      stroke="transparent"
                    ></path>
                  </svg>
                </g>
                <defs></defs>
              </svg>
              <rect
                width="238.49265164835165"
                height="247.2"
                fill="none"
                stroke="none"
                visibility="hidden"
              ></rect>
            </g>
          </svg>
        </g>
      </svg>
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
  clickHandler: PropTypes.func,
};
