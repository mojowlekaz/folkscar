"use client";
import Image from "next/image";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import supabase from "@/api/Supabase";
import { isValidAddress } from "ethereumjs-util";
import CopyToClipboard from "react-copy-to-clipboard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  height: 454,
  padding: "53px 35px",
  bgcolor: "#111",
  border: "1px solid rgba(153, 153, 153, 0.60)",
  borderRadius: "16px",
  p: 4,
};

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 362,
  height: 636,
  padding: "53px 22px",
  bgcolor: "#111",
  border: "1px solid rgba(153, 153, 153, 0.60)",
  borderRadius: "6px",
  p: 4,
};

const follows = [
  {
    id: 1,
    text: (
      <div className="flex relative gap-2">
        <p className="text-[15px] font-bold btnmint not-italic">1.</p>
        Follow us on Twitter
      </div>
    ),
  },

  {
    id: 2,
    text: (
      <div className="flex relative gap-2">
        <p className="text-[15px] font-bold btnmint not-italic">2.</p>
        Submit your Email Address
      </div>
    ),
  },

  {
    id: 3,
    text: (
      <div className="flex relative gap-2">
        <p className="text-[15px] font-bold btnmint not-italic">3.</p>
        Submit your ERC-20 Wallet Address
      </div>
    ),
  },
];

const tweetText =
  "I was just confirmed on the @folkscar allowlist. Something's boiling. Grab your spot on https://allowlist.folkscar.xyz  #folkscar #folks #car";

const handleTweet = () => {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweetText
  )}`;
  window.open(tweetUrl, "_blank", "width=550,height=420");
};

const tweettUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
  tweetText
)}`;
const share = [
  {
    img: "/allowlistasset/twitter.svg",
    text: "Twitter Feed",
  },

  {
    img: "/allowlistasset/linkcopy.svg",
    text: "Copy Link",
  },
];

export default function Joinwaitlist() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [walletaddress, WalletAddress] = useState("");
  const [isValidWalletAddress, setIsValidWalletAddress] = useState(false);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const handleWalletAddress = (e) => {
    WalletAddress(e.target.value);
    if (walletaddress.length === 42) {
      setIsValidWalletAddress(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("folkscar")
        .upsert([{ email: email, walletaddress: walletaddress }]);

      if (error) {
        console.error("Error storing data:", error.message);
      } else {
        console.log("Data stored successfully:", data);
        setIsSubmissionSuccessful(true);
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset the flag after 2 seconds
  };

  return (
    <div>
      <button
        className="eurostile bg-0073F0 justify-center flex gap-[10px] items-center w-[197px] h-[44px]"
        onClick={handleOpen}
      >
        {" "}
        <p className="text-[15px] eurostile uppercase  leading-normal font-bold">
          {" "}
          Join Waitlist{" "}
        </p>
      </button>

      {isSubmissionSuccessful == true ? (
        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style1}>
            <div className="flex items-center flex-col gap-4 justify-center">
              <h1 className="text-[24px]  font-bold uppercase  leading-normal">
                Congratulations!
              </h1>
              <div className="flex justify-center items-center">
                <video
                  autoPlay
                  loop
                  muted
                  className="relative justify-center items-center flex  object-cover w-[318px] h-[182px]]"
                >
                  <source src="/home.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h1 className="text-[18px] text-center font-bold uppercase  leading-normal">
                YOU’RE NOW PART OF THE FOLKS CAR CLUB ALLOWLIST
              </h1>
              <div
                style={{
                  width: "318px",
                  height: "0px",
                  border: "1px solid rgba(153, 153, 153, 0.60)",
                }}
              />
              <div className="relative flex flex-col gap-2">
                <h1 className="text-[14px] text-center font-bold uppercase  leading-normal">
                  SHARE FOLKS CAR CLUB
                </h1>
                <div className=" flex flex-col gap-3 relative">
                  {share.map((shares, index) => (
                    <div key={index}>
                      <div className="flex share flex-row gap-2 h-[38px] w-[318px] cursor-pointer justify-center items-center relative">
                        <img src={shares.img} alt="shares" height={100} />
                        {shares.text === "Twitter Feed" ? (
                          <div onClick={handleTweet}>
                            <p className="text-[14px] helvetica font-bold">
                              {shares.text}
                            </p>
                          </div>
                        ) : (
                          <CopyToClipboard text={tweettUrl} onCopy={handleCopy}>
                            <p className="text-[14px] helvetica font-bold">
                              {shares.text}
                            </p>
                          </CopyToClipboard>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <br />

                <button
                  onClick={handleClose}
                  type="submit"
                  className="bg-blue-500  text-[15px] helvetica font-bold uppercase w-full rounded-[6px]  text-white px-4 py-2 "
                >
                  Confirm
                </button>
                {isCopied && (
                  <div className="text-green-500 text-center">Link copied!</div>
                )}
              </div>
            </div>
          </Box>
        </Modal>
      ) : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex items-center flex-col gap-4 justify-center">
              <h1 className="text-[20px]  font-bold  leading-normal">
                JOIN THE WAITLIST
              </h1>
              <div className="flex flex-col relative justify-center items-center gap-2">
                {follows.map((follow, index) => (
                  <div key={index}>
                    <p className="text-[15px] font-bold btnmint not-italic">
                      {follow.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <br />

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-8 relative">
                <div className="flex flex-col relative gap-6">
                  <div>
                    <p className="text-[14px] font-bold btnmint not-italic leading-normal">
                      Email Address
                    </p>
                    <input
                      style={{
                        border: "1px solid #00FF0A",
                        outline: "none",
                        color: "white",
                      }}
                      value={email}
                      onChange={handleEmail}
                      placeholder="folkscar@proton.me"
                      className="w-[290px] custom-input bg-transparent focus:border-00FF0A  text-white text-[12px]  h-[34px] items-center rounded-[5px] p-[10px] "
                    />
                    {!isValidEmail && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "5px",
                        }}
                      >
                        Please enter a valid email address.
                      </p>
                    )}
                  </div>
                  <div>
                    <p className="text-[14px] font-bold btnmint not-italic leading-normal">
                      Wallet Address (ERC-20)
                    </p>
                    <input
                      value={walletaddress}
                      onChange={handleWalletAddress}
                      style={{ border: "1px solid #00FF0A", outline: "none" }}
                      placeholder="0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                      className="w-[290px]  custom-input text-white text-[12px]   bg-transparent  h-[34px] items-center rounded-[5px] p-[10px] "
                    />
                    {/* {walletaddress.length < 42 && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "5px",
                        }}
                      >
                        Please enter a valid wallet address.
                      </p>
                    )} */}
                  </div>
                </div>

                {isValidEmail && walletaddress.length == 42 ? (
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 "
                  >
                    Submit
                  </button>
                ) : (
                  <div
                    style={{
                      border: "1px solid #fff",
                      outline: "none",
                      color: "white",
                      textAlign: "center",
                    }}
                    className="bg-none rounded-[5px] text-white px-4 py-2 "
                  >
                    Submit
                  </div>
                )}
              </div>
            </form>
          </Box>
        </Modal>
      )}
    </div>
  );
}
