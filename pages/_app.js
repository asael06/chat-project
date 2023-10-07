import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <div className="main-container">
      <div className="chat-container">
        <Component {...pageProps} />;
      </div>
    </div>
  );
}
