import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <section className="flex justify-center items-center py-8">
      <div className="w-full max-w-3xl ">
        <Image
          src="/main.png"
          width={800}
          height={100}
          alt="外観と院内の写真が並んだ画像に「当院では、ご来院いただく患者様に 心まで癒されていただけますよう、真心を込めて施術いたします。痛みなどでお悩みの方は、ぜひご相談ください。」と書かれています"
          className="w-full h-auto rounded-xl shadow-md object-cover"
        />
      </div>
    </section>
  );
};

export default HeroImage;
