import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";

const TestPage = () => {
  const containerRef = useRef(null);
  const bottomRef = useRef(null);
  const purpleDiv = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    function updateSize() {
      setWindowWidth(window.innerWidth);
      console.log(windowWidth);
    }
    window.addEventListener("resize", updateSize);

    const ctx = gsap.context(() => {
      //   // 宣告時間軸
      //   const t1 = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: containerRef.current,
      //       pin: true,
      //       start: "25% top",
      //       end: "bottom bottom",
      //     },
      //   });
      //   // 時間軸排序的動畫
      //   t1.from("#h2", { xPercent: -10, opacity: 0 })
      //     .from("h3", { xPercent: -100, opacity: 0 })
      //     .from(bottomRef.current, { xPercent: -100, opacity: 0 });

      //   個別建立
      gsap.from(purpleDiv.current, {
        scrollTrigger: {
          trigger: containerRef.current, //觸發動畫的元素
          start: "top top", //觸發動畫的起始範圍，意思為trigger的頂部（第一個top）觸碰到viewport的頂部（第二個top）時在開始動畫
          end: "+=100%", //+=100表示結束點在viewport top向下100px，+=100%表示結束點在viewport再向下一個viewport的高度（+一個100vh的意思) ，bottom bottom 表示，觸發元件的底部碰到viewport的底部時會結束
          pin: true, // 若觸發動畫，在動畫期間（between start end )都會固定trigger的位置，(會自動延伸padding)
          scrub: 2, //翻譯為擦洗，有寫入這個選項才會依據scroll來回移動(true 或者 數字都可以，數字越大緩衝越多)
          markers: {
            //輔助標示線
            fontSize: "20px",
          },
        },
        x: -300,
        rotate: 360,
      });
    });

    return () => {
      ctx.revert();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-red-300 w-full h-[100dvh] flex justify-center items-center flex-col gap-4"
    >
      <div> High:{windowWidth}</div>
      {windowWidth > 765 && <div> Low:{windowWidth}</div>}
      <h2 id="h2" className="text-6xl text-center">
        Title
      </h2>
      <h3 id="h3" className="text-4xl text-center">
        SubTitle
      </h3>
      <div ref={purpleDiv} className="w-12 h-12 rounded-lg bg-purple-500"></div>
      <p id="p" className="w-[50%] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente totam beatae explicabo dolore error
        optio. Provident cum veniam quod molestiae quam quae delectus voluptate est voluptatum, libero quasi
        sapiente sint!
      </p>

      <p ref={bottomRef}>bottom</p>
    </section>
  );
};

export default TestPage;
