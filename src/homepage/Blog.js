import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import TweenOne from "rc-tween-one";
import React from "react";
import Slider from "react-slick";
import { Button, Card, Image } from "semantic-ui-react";

const blogPosts = [
  {
    title: "FRINX releases FRINX Machine 1.1",
    date: "February 21, 2020 - 4:04pm",
    img:
      "https://frinx.io/wp-content/uploads/2020/02/Screen-Shot-2020-02-21-at-2.18.03-PM-1536x764.png",
    description:
      "FRINX has released FRINX Machine 1.1, the latest version of its flagship network automation solution. FRINX Machine combines the ability to build and manage..."
  },
  {
    title: "Getting IO Right",
    date: "February 5, 2020 - 5:56pm",
    img:
      "https://frinx.io/wp-content/uploads/2020/01/Screen-Shot-2020-01-22-at-5.45.49-PM-1030x508.png",
    description:
      "We recently embarked on a new project in a subject that we were familiar with (network configuration at scale) and that we have..."
  },
  {
    title: "Second time's a charm",
    date: "February 5, 2020 - 5:34pm",
    img:
      "https://frinx.io/wp-content/uploads/2020/01/Cumulus_workflow-1030x536.png",
    description:
      "Second time’s a charm Conventional wisdom says that it is not a good use of time to rewrite existing code with new technologies..."
  },
  {
    title: "FRINX releases FRINX Machine 1.1",
    date: "February 21, 2020 - 4:04pm",
    img:
      "https://frinx.io/wp-content/uploads/2020/02/Screen-Shot-2020-02-21-at-2.18.03-PM-1536x764.png",
    description:
      "FRINX has released FRINX Machine 1.1, the latest version of its flagship network automation solution. FRINX Machine combines the ability to build and manage..."
  },
  {
    title: "Getting IO Right",
    date: "February 5, 2020 - 5:56pm",
    img:
      "https://frinx.io/wp-content/uploads/2020/01/Screen-Shot-2020-01-22-at-5.45.49-PM-1030x508.png",
    description:
      "We recently embarked on a new project in a subject that we were familiar with (network configuration at scale) and that we have..."
  },
  {
    title: "Second time's a charm",
    date: "February 5, 2020 - 5:34pm",
    img:
      "https://frinx.io/wp-content/uploads/2020/01/Cumulus_workflow-1030x536.png",
    description:
      "Second time’s a charm Conventional wisdom says that it is not a good use of time to rewrite existing code with new technologies..."
  }
];

function Blog() {
  var settings = {
    arrows: true,
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <OverPack className="blog-wrapper" playScale={0.3}>
      <TweenOne
        animation={{
          y: "+=30",
          opacity: 0,
          type: "from",
          ease: "easeOutQuad",
          delay: 200
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
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)"
                    }}
                  >
                    <Image
                      src={b.img}
                      wrapped
                      ui={false}
                      style={{ maxHeight: "150px", overflow: "hidden" }}
                    />
                    <Card.Content>
                      <Card.Header
                        style={{
                          position: "relative",
                          height: "50px",
                          overflow: "hidden"
                        }}
                      >
                        {b.title}
                      </Card.Header>
                      <Card.Meta>
                        <span className="date">{b.date}</span>
                      </Card.Meta>
                      <Card.Description
                        style={{
                          height: "100px",
                          overflow: "hidden"
                        }}
                      >
                        {b.description}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>Read more</a>
                    </Card.Content>
                  </Card>
                </div>
              );
            })}
          </Slider>
          <Button circular>Show More Posts</Button>
        </div>
      </TweenOne>
    </OverPack>
  );
}

export default Blog;
