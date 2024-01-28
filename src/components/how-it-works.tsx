import { MdAnalytics } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { IoCloudUploadSharp } from "react-icons/io5";
import Header from "@/components/header";
import { siteConfig } from "@/config/site";

export default function HowItWorks() {
  return (
    <section className="container pt-24 px-8">
      <div>
        <Header heading={`How ${siteConfig.name} Works?`} />
      </div>
      <div className="grid md:grid-cols-3 gap-8 w-full mt-16">
        <div>
          <div className="h-[4cm] relative flex justify-center items-end">
            <div className="h-[4cm] justify-center flex w-[4cm] rounded-lg items-center bg-white text-[52px] shadow-md text-green-800">
              <FaCamera />
            </div>
          </div>
          <div className="py-4 text-center">
            <p>
              Once you have the Greenguard app installed on your device, launch
              it and access the feature for capturing images. Position your
              device's camera to focus on the specific crop leaf you want to
              test. Ensure that the image is clear and includes relevant details
              of the leaf's condition.
            </p>
          </div>
        </div>
        <div>
          <div className="h-[4cm] relative flex justify-center items-end">
            <div className="h-[4cm] justify-center flex w-[4cm] rounded-lg items-center bg-white text-[52px] shadow-md text-green-800">
              <IoCloudUploadSharp />
            </div>
          </div>
          <div className="py-4 text-center">
            <p>
              In the next step, use the Greenguard app's upload option to submit
              the captured image for analysis. After selecting the upload
              feature, navigate to the location where you stored the image and
              choose it for processing. Once the image is uploaded, Greenguard
              initiates its processing algorithms to analyze the visual data.
            </p>
          </div>
        </div>
        <div>
          <div className="h-[4cm] relative flex justify-center items-end">
            <div className="h-[4cm] justify-center flex w-[4cm] rounded-lg items-center bg-white text-[52px] shadow-md text-green-800">
              <MdAnalytics />
            </div>
          </div>
          <div className="py-4 text-center">
            <p>
            In the final step, after the image processing is complete, Greenguard will display the results along with detailed information on the identified issue affecting the crop leaf. The app not only diagnoses the problem but also provides practical guidance on preventive measures and potential remedies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
