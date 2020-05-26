import React from "react";

const Info = () => {
    return (
        <div className="containerMain">
            <div
                style={{
                    display: "block",
                    margin: "20px auto",
                    fontSize: "20px",
                    color: "white",
                    padding: "20px",
                }}
            >
                <div
                    style={{
                        display: "block",
                        margin: "0 0 20px 0",
                        textAlign: "center",
                        fontSize: "30px",
                    }}
                >
                    About the page
                </div>
                <p>
                    1) This is the page about Vikings and Game of Thrones serial
                    movies which was created to improve my dev skills. I used
                    React/Redux, Redux Thunk, React-Slick, React-Player,
                    React-Router, React-Scroll, redux-form and other additional
                    libraries. Also I used Firebase database (but used axios
                    library for http requests instead of firebase's requests in
                    this case) On this page a few elements of{" "}
                    <strong>Bootstrap</strong> css were user, to create
                    components such as alerts.
                </p>
                <br></br>
                <p>
                    2)By clicking the button movie you can chose which movie you
                    want to see on the page{" "}
                </p>
                <br></br>
                <p>
                    3) By clicking the button <strong>Season</strong> you can
                    chose from which season you can see the content on the page
                </p>
                <br></br>
                <p>
                    4) Here I realized a logic for a simple slider by using{" "}
                    <strong>React-Slick</strong> library, filter for the content
                    which you can find on the page, logic and page for creating
                    account and login/log out. Also here you can find page for
                    liked content(it can be one of three content-types:
                    photo/video/story), from out where you can delete content or
                    clear all page. If you are logged in you can switch on EDIT
                    MODE, by clicking the button EDIT MODE and you'll be able to
                    add or delete content, or edit existing content(if you'll
                    open it by clicking the button Know More and then button
                    EDIT).
                </p>
                <br></br>
                <p>
                    5) I realized scroll to the menu in Header by using
                    React-Scroll
                </p>
                <p>
                    6) you can see the button Show more under every type of
                    content on which i realized logic for showing more
                    content(basicly user can see 3 photo and 2 videO/story)
                </p>
                <br></br>
                <p>
                    7) By clicking the <strong>News</strong> button you can find
                    the News page, where you can read News and edit, add or
                    delete them in the Edit mode( if you are logged in )
                </p>
            </div>
        </div>
    );
};

export default Info;
