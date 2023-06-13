import React from "react";
import image1 from "../assets/discoverpage_images/Image.png";
import image2 from "../assets/discoverpage_images/Rectangle 1704.png";
import image3 from "../assets/discoverpage_images/Rectangle 1703.png";
import image4 from "../assets/discoverpage_images/Rectangle 1706.png";
import image5 from "../assets/discoverpage_images/Rectangle 1708.png";
import vector1 from "../assets/discoverpage_images/vect.png";
import vector2 from "../assets/discoverpage_images/vectt.png";
import chatDot from "../assets/discoverpage_images/ChatDots.png";
import { useState } from "react";

function Newdesign() {
  //drop down functionality

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDrop = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <main
        class=" w-[375px] h-[835px] bg-[#110011]
      mx-8 mt-[4rem] pt-[.9rem] pl-[1rem]"
      >
        <div
          class="pl-[.5rem] w-[343px] h-[310px]  mt-[1.5rem]
      pt-[1.7rem] text-center
      bg-gradient-to-bl from-[#FF0303] via-[#6f00f6] rounded-[1rem] "
        >
          <div class=" flex">
            <div>
              <img src={image1} alt="image1" />
              <p
                class=" text-[11.6px] w-[46px] pt-[.3rem] mt-[1rem] text-[#FFFFFF] font-bold pb-[.3rem] bg-[#FBBC04] 
            text-center rounded-[.4rem]"
              >
                #Safe
              </p>
            </div>

            <div>
              <p
                class=" text-[11.6px] w-[64px] pt-[.3rem] mb-[1rem] ml-[.4rem] text-[#FFFFFF] 
            font-bold pb-[.3rem] bg-[#FF007F] 
            text-center rounded-[.4rem]"
              >
                #Secure
              </p>
              <img src={image2} alt="image2" class="ml-[.6rem]" />
            </div>

            <div>
              <img src={image3} class=" ml-[.4rem]" alt="image3" />
              <p
                class=" text-[11.6px] w-[73.1px] pt-[.3rem] mt-[.4rem] text-[#FFFFFF] 
             font-bold pb-[.3rem] bg-[#03A4FF] 
             text-center rounded-[.4rem] ml-[-0.8rem]"
              >
                #Support
              </p>
            </div>

            <div>
              <p
                class=" text-[11.6px] w-[73.1px] pt-[.3rem] mb-[1rem] text-[#FFFFFF] 
            font-bold pb-[.3rem] bg-[#B0E298] 
            text-center rounded-[.4rem] ml-[.7rem]"
              >
                #Connect
              </p>
              <img src={image4} class=" ml-[1rem]" alt="image4" />
            </div>

            <div>
              <img src={image5} class=" ml-[.5rem]" alt="image5" />
            </div>
          </div>
          <h3 class="text-center mt-[.6rem] font-bold text-[20px] text-[#FFFFFF]">
            Teekets For Events
          </h3>

          <p class="text-center text-[14px] text-[#FFFFFF] w-[315px]">
            Great news! Teeket allows you connect with other attendees at no
            cost
          </p>

          <button
            type="button"
            class=" w-[167px] rounded-[1rem] mt-[1.7rem] text-[#0052F6] text-center font-bold text-[12px] h-[48px] bg-[#FFFFFF]"
          >
            Book an event
          </button>
        </div>

        <div>
          <div class="mt-[1rem]">
            <span class="text-[#989898] text-[12px] font-medium">MENU</span>
          </div>

          <div class="flex  mt-[1.2rem] mb-[.7rem]">
            <h3 class="font-semibold text-[14px] text-[#FFFFFF]">
              For Organizers
            </h3>
            <div>
              <img
                src={vector1}
                alt="vector"
                class="ml-[14rem] mt-[.4rem]"
                onClick={toggleDrop}
              />
            </div>
          </div>

          {isDropdownOpen && (
            <div class=" pt-[.8rem">
              <p class="text-[#D2D2D2] mb-[.7rem] text-[14px] font-light">
                How to create events
              </p>
              <p class="text-[#D2D2D2] text-[14px] mt-[.7rem] mb-[.6rem] font-lightl">
                Event FAQs.
              </p>
              <p class="text-[#D2D2D2] text-[14px] font-light ">
                For Attendees.
              </p>
            </div>
          )}
        </div>

        <div class=" w-[343px] bg-[#585858c0] h-[.2px] mt-[2.5rem]"></div>

        <div class="mt-[2rem]">
          <div class="flex">
            <img src={vector2} alt="vector" />
            <p class="text-[#FFFFFF] text-[12px] font-light ml-[.7rem]">
              09136605067
            </p>
          </div>

          <div class="flex mt-[1rem]">
            <img src={chatDot} alt="chatIcon" />
            <p class="text-[#FFFFFF] text-[12px] font-light ml-[.7rem]">
              Teeket@support.com
            </p>
          </div>
        </div>

        <div class=" w-[343px] bg-[#585858c1] h-[.2px] mt-[3.5rem]"></div>

        <div class="flex mt-[1.6rem]">
          <p class="text-[#FFFFFF] text-[14px] font-normal">Privacy Policy</p>
          <p class="text-[#FFFFFF] text-[14px] font-normal ml-[6rem]">
            Terms of Use
          </p>
        </div>

        <div class="mt-[.4rem]">
          <p class="font-extralight text-[12px] text-[#ffffff83]">
            @TeeketInc Allrights reserved.
          </p>
          <p class="font-extralight text-[11.7px] text-[#ffffff83] text-center mt-[1.4rem]">
            HerTechTrail Capstone project, designed by GROUP 2
          </p>
        </div>
      </main>
    </div>
  );
}

export default Newdesign;
