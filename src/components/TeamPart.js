import React from 'react'
import team1 from '../assets/images/team/team-1.png'
import team2 from '../assets/images/team/team-2.png'
import team3 from '../assets/images/team/team-3.png'

export default function TeamPart() {
    return (
        <div>
             {/* <!--====== TEAM PART START ======--> */}
    <section id="team" class="team-area pt-[120px]">
      <div class="container px-4">
        <div class="justify-center flex flex-wrap">
          <div class="w-full lg:w-2/3">
            <div class="pb-8 text-center section-title">
              <div
                class="
                  m-auto
                  w-40
                  h-1
                  mb-3
                  bg-gradient-to-r
                  to-[#fe8464]
                  from-[#fe6e9a]
                "
              ></div>
              <h3 class="text-[32px] pt-2 font-bold">
                <span class="font-normal">Meet Our</span> Creative Team Members
              </h3>
            </div>
            {/* <!-- section title --> */}
          </div>
        </div>
        {/* <!-- row --> */}
        <div class="justify-center flex flex-wrap">
          <div class="w-full sm:w-2/3 lg:w-1/3">
            <div
              class="
                mt-8
                text-center
                single-team
                mx-4
                overflow-hidden
                duration-300
                rounded-lg
                shadow-sm
                group
                hover:shadow-xl
                wow
                fadeIn
              "
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div class="relative team-image">
                <img
                  class="w-full"
                  src={team1}
                  alt="Team"
                />
                <div class="team-social absolute bottom-0 left-0 right-0 mb-6">
                  <ul
                    class="
                      relative
                      z-10
                      inline-flex
                      px-3
                      overflow-hidden
                      bg-white bg-opacity-25
                      rounded-full
                    "
                  >
                    <li>
                      <a href="javascript:void(0)">
                        <i class="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="lni lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="lni lni-instagram-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="p-8">
                <h5 class="mb-1 text-xl font-bold text-gray-900">
                  Luis Felipe 
                </h5>
                <p>Fundador e Chefe Executivo</p>
              </div>
            </div>
            {/* <!-- single team --> */}
          </div>
          <div class="w-full sm:w-2/3 lg:w-1/3">
            <div
              class="
                mt-8
                text-center
                single-team
                mx-4
                overflow-hidden
                duration-300
                rounded-lg
                shadow-sm
                group
                hover:shadow-xl
                wow
                fadeIn
              "
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div class="relative team-image">
                <img
                  class="w-full"
                  src={team2}
                  alt="Team"
                />
                <div class="team-social absolute bottom-0 left-0 right-0 mb-6">
                  <ul
                    class="
                      relative
                      z-10
                      inline-flex
                      px-3
                      overflow-hidden
                      bg-white bg-opacity-25
                      rounded-full
                    "
                  >
                    <li>
                      <a href="javascript:void(0)">
                        <i class="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="lni lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="lni lni-instagram-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="p-8">
                <h5 class="mb-1 text-xl font-bold text-gray-900">Marcio Dantas</h5>
                <p>Encarregado
                </p>
              </div>
            </div>
            {/* <!-- single team --> */}
          </div>
          <div class="w-full sm:w-2/3 lg:w-1/3">
            <div
              class="
                mt-8
                text-center
                single-team
                mx-4
                overflow-hidden
                duration-300
                rounded-lg
                shadow-sm
                group
                hover:shadow-xl
                wow
                fadeIn
              "
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <div class="relative team-image">
                <img
                  class="w-full"
                  src={team3}
                  alt="Team"
                />
                <div class="team-social absolute bottom-0 left-0 right-0 mb-6">
                  <ul
                    class="
                      relative
                      z-10
                      inline-flex
                      px-3
                      overflow-hidden
                      bg-white bg-opacity-25
                      rounded-full
                    "
                  >
                    <li>
                      <a href="javascript:void(0)">
                        <i class="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="lni lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="lni lni-instagram-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="p-8">
                <h5 class="mb-1 text-xl font-bold text-gray-900">
                  Suely 
                </h5>
                <p>Gerente Financeiro</p>
              </div>
            </div>
            {/* <!-- single team --> */}
          </div>
        </div>
        {/* <!-- row --> */}
      </div>
      {/* <!-- container --> */}
    </section>
    {/* <!--====== TEAM PART ENDS ======--> */}
        </div>
    )
}
