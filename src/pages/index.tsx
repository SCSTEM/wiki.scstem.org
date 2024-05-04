import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="South Central STEM Collective's wiki landing page"
      noFooter
    >
      <div className="w-full h-[calc(100vh-var(--ifm-navbar-height))] overflow-hidden -z-10 absolute">
        <div
          className="size-full absolute"
          style={{
            backgroundImage:
              "radial-gradient(circle,rgba(0,0,0,.5)5%,rgba(0,0,0,1)100%)",
          }}
        ></div>
        <img
          src="/image/landing-background.webp"
          alt=""
          className="absolute object-cover size-full -z-20"
        />
      </div>

      <main className="size-full flex flex-col max-w-[500px] max-h-[500px] px-10 md:p-0 m-auto items-center space-y-4">
        <img
          src="/image/logo-full-white.svg"
          alt="South Central STEM Collective's logo"
          className="object-contain"
        />
        <Link href="/wiki">
          <button
            className="border-0 align-middle select-none font-bold text-md md:text-lg text-[#171717] text-center transition-all disabled:opacity-50 cursor-pointer disabled:shadow-none disabled:pointer-events-none py-3 px-6 rounded-lg bg-[var(--ifm-color-primary)] shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-3"
            type="button"
          >
            Enter the wiki
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              className="md:size-6 size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </Link>
      </main>
    </Layout>
  );
}
