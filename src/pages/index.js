import Head from "next/head";

export default () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "100px",
          backgroundColor: "white",
          color: "black",
          fontSize: "20px",
          paddingTop: "40px",
        }}
      >
        <div>
          This is correct and should work because a div is really good for this
          task.
        </div>
        <img src="/vercel.svg" alt="" width="30" height="30" />

        <nav>
          <a href="/event">Event</a>
        </nav>
        <nav>
          <a href="/About-page">About</a>
        </nav>
        <nav>
          <a href="/">Event</a>
        </nav>
        <nav>
          <a href="/">Event</a>
        </nav>
      </div>
      <div style={{ padding: "20px", margin: "0" }}>
        <div style={{ position: "absolute", right: "10rem" }}>
          <h2>Event in kerala</h2>
          <p style={{ width: "30rem", right: "20" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <br />
        <h2>Event in TamilNadu</h2>
        <p style={{ width: "30rem" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <br />
        <h2>Event in Andrapradhes</h2>
        <p style={{ width: "30rem" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </>
  );
};
