import axios from "axios";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import TweenOne from "rc-tween-one";
import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { Button, Card, Image } from "semantic-ui-react";
import { MobileContext } from "../common/MobileProvider";

function Blog() {
  const { isMobile } = useContext(MobileContext);

  const [blogPosts, setBlogPosts] = useState([]);
  var settings = {
    arrows: true,
    speed: 500,
    infinite: false,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    let blogId = process.env.REACT_APP_BLOG_ID;
    let blogAPIKey = process.env.REACT_APP_BLOGGER_API_KEY;
    axios
      .get(
        `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${blogAPIKey}`
      )
      .then((res) => {
        let blogPosts = res?.data?.items || [];
        setBlogPosts(blogPosts);
      });
  }, []);

  const parsePost = (post) => {
    const parser = new DOMParser();
    const html = parser.parseFromString(post.content, "text/html");
    const imgUrl = html.querySelector("img")?.src || "";
    return { html, imgUrl };
  };

  return (
    <OverPack className="blog-wrapper" playScale={0.3}>
      <TweenOne
        animation={{
          y: "+=30",
          opacity: 0,
          type: "from",
          ease: "easeOutQuad",
          delay: 200,
        }}
        className="home-page"
      >
        <div className="blog">
          <div className="blog-title">
            <h2>See whats new</h2>
            <h1>Blog</h1>
          </div>

          <Slider className="blog-posts" {...settings}>
            {blogPosts.map((b, i) => {
              return (
                <div className="post">
                  <Card
                    fluid
                    style={{
                      padding: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <Image
                      src={parsePost(b).imgUrl}
                      wrapped
                      ui={false}
                      style={{ maxHeight: "150px", overflow: "hidden" }}
                    />
                    <Card.Content>
                      <Card.Header
                        style={{
                          position: "relative",
                          height: "50px",
                          overflow: "hidden",
                        }}
                      >
                        {b.title}
                      </Card.Header>
                      <Card.Meta>
                        <span className="date">
                          {new Date(b.published).toDateString()}
                        </span>
                      </Card.Meta>
                      <Card.Description className="post-description">
                        {b.content.replace(/<\/?[^>]+>/gi, "")}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a href={b.url} target="_blank">
                        Read more
                      </a>
                    </Card.Content>
                  </Card>
                </div>
              );
            })}
          </Slider>
          <Button
            onClick={() =>
              window.open("https://frinxio.blogspot.com/", "_blank")
            }
            circular
          >
            Show More Posts
          </Button>
        </div>
      </TweenOne>
    </OverPack>
  );
}

export default Blog;
