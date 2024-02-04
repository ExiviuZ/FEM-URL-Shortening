import { useState } from "react";

function Main() {
  const [toShorten, setToShorten] = useState("");
  async function handleShorten(e, longUrl) {
    e.preventDefault();
    console.log(longUrl);
    try {
      const response = await fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: longUrl }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          console.log(data.result_url);
          return data.result_url;
        } else {
          console.error("Error shortening URL:", data.message);
          return null;
        }
      } else {
        console.error("API request failed:", response.statusText);
        return null;
      }
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
  return (
    <main className="px-[1rem] bg-slate-200 pt-[8rem] pb-[4rem] relative sm:px-[2rem] lg:px-[5rem] lg:pb-[10rem]">
      <form
        onSubmit={(e) => handleShorten(e, toShorten)}
        action=""
        className="absolute top-[-7%] flex flex-col gap-[1rem] p-[1.5rem] w-[90%] lg:w-[85%] mx-auto right-0 left-0 bg-hero-pattern-mobile bg-contain bg-no-repeat rounded-[5px] bg-right-top bg-app-primary-dark-violet text-[15px] sm:flex-row sm:px-[3rem] sm:py-[2rem]"
      >
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="py-[0.75rem] px-[1rem] rounded-[5px] sm:w-[80%]"
          value={toShorten}
          onChange={(e) => setToShorten(e.target.value)}
        />
        <button className="py-[0.75rem] rounded-[5px] sm:w-[20%]">
          Shorten it!
        </button>
      </form>

      <div className="max-w-[420px] mx-auto mb-[7rem] lg:mb-[3rem]">
        <h2 className="text-[1.75rem] sm:text-center">Advanced Statistics</h2>
        <p className=" sm:text-center">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <section className="flex flex-col gap-[4rem] sm:gap-[4rem] lg:gap-[2rem] sm:grid lg:grid-cols-stats">
        <article className="relative bg-white rounded-[5px] pt-[4rem] py-[1.5rem] max-w-[500px] lg:max-w-[none] mx-auto sm:px-[1rem]">
          <img
            src="images/icon-brand-recognition.svg"
            alt=""
            className="p-[1rem] bg-app-primary-dark-violet rounded-full absolute left-0 right-0 mx-auto top-[-18%] w-max"
          />
          <h3 className="text-[1.25rem]">Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </article>
        <article className="relative bg-white rounded-[5px] pt-[4rem] py-[1.5rem] max-w-[500px] lg:max-w-[none] mx-auto sm:px-[1rem] before:content-[''] before:absolute before:h-[64px] before:w-[7px] before:bg-app-primary-cyan before:bottom-[100%] before:left-[50%] lg:before:left-[-32px] lg:translate-y-[50px] lg:before:bottom-[75%] lg:before:h-[7px] lg:before:w-[32px]">
          <img
            src="images/icon-detailed-records.svg"
            alt=""
            className="p-[1rem] bg-app-primary-dark-violet rounded-full absolute left-0 right-0 mx-auto top-[-18%] w-max"
          />
          <h3 className="text-[1.25rem]">Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </article>
        <article className="relative bg-white rounded-[5px] pt-[4rem] py-[1.5rem] max-w-[500px] lg:max-w-[none] mx-auto sm:px-[1rem] before:content-[''] before:absolute before:h-[64px] before:w-[7px] before:bg-app-primary-cyan before:bottom-[100%] before:left-[50%] lg:before:left-[-32px] lg:translate-y-[100px] lg:before:bottom-[75%] lg:before:h-[7px] lg:before:w-[32px]">
          <img
            src="images/icon-fully-customizable.svg"
            alt=""
            className="p-[1rem] bg-app-primary-dark-violet rounded-full absolute left-0 right-0 mx-auto top-[-18%] w-max"
          />
          <h3 className="text-[1.25rem]">Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Main;
