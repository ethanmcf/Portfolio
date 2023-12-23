import ShareSVG from "../../public/images/svgs/share.svg";
export default function EmailForm() {
  return (
    <form>
      <div className="relative mt-8 flex items-center pr-0 bg-darkGrey">
        <input
          required={true}
          type="email"
          autoComplete="off"
          id=":S3:"
          placeholder="Email address"
          className="peer z-20 w-full bg-darkGrey px-4 py-2.5 text-white rounded-lg focus:outline-none sm:text-[0.8125rem]/6"
          name="email"
        />
        <button
          className="group relative z-10 rounded-md py-1.5 text-[0.8125rem]/6 font-semibold text-white pl-2.5 pr-[calc(9/16*1rem)] mr-1 flex align-middle"
          type="submit"
        >
          <span className="absolute inset-0 rounded-md bg-gradient-to-b from-white/10 to-white opacity-10 transition-opacity group-hover:opacity-15" />
          <span className="absolute inset-0 rounded-md opacity-7.5 shadow-[inset_0_1px_1px_white] shadow-grey transition-opacity group-hover:opacity-10" />
          <span>Send </span>
          <ShareSVG className={"fill-white ml-2 mt-[6px] w-[12px] h-[12px]"} />
        </button>
        <div className="absolute inset-0 rounded-lg transition peer-focus:ring-4 peer-focus:ring-blue/16" />
        <div className="absolute inset-0 rounded-lg ring-1 ring-grey peer-focus:ring-blue  " />
      </div>
      <div className={"flex mt-3"}>
        <div className="relative flex items-center pr-0 flex-1 mr-2 w-1/2">
          <input
            required={true}
            autoComplete="off"
            id=":S3:"
            placeholder="Subject "
            className="peer z-20 bg-darkGrey w-full px-4 py-2.5 text-white rounded-lg focus:outline-none sm:text-[0.8125rem]/6"
            name="subject"
          />
          <div className="absolute inset-0  rounded-lg transition peer-focus:ring-4 peer-focus:ring-blue/16" />
          <div className="absolute inset-0  rounded-lg ring-1 ring-grey peer-focus:ring-blue  " />
        </div>
        <div className="relative flex items-center pr-0 flex-1 ml-2 w-1/2">
          <input
            required={true}
            autoComplete="off"
            id=":S3:"
            placeholder="Name "
            className="peer z-20 flex-auto bg-darkGrey w-full px-4 py-2.5 text-white rounded-lg focus:outline-none sm:text-[0.8125rem]/6"
            name="name"
          />
          <div className="absolute inset-0  rounded-lg transition peer-focus:ring-4 peer-focus:ring-blue/16" />
          <div className="absolute inset-0  rounded-lg ring-1 ring-grey peer-focus:ring-blue  " />
        </div>
      </div>

      <div className="relative mt-3 flex items-center">
        <textarea
          required={true}
          id=":S4:"
          className="peer h-[120px] z-30 rounded-md px-4 w-full py-2 resize-none bg-darkGrey text-white sm:text-[0.8125rem]/6 focus:outline-none"
          placeholder="Message"
          name="message"
        />
        <div className="absolute inset-0  rounded-md transition peer-focus:ring-4 peer-focus:ring-blue/16" />
        <div className="absolute inset-0  rounded-md ring-1 ring-grey peer-focus:ring-blue  " />
      </div>
    </form>
  );
}
