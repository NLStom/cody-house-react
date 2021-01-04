import React from "react";
class ReadMore extends React.Component {
  componentDidMount() {
    let frontEnd = document.createElement("script");
    frontEnd.src = "../static/read-more.js"; // 👈 make sure to use the correct path
    frontEnd.id = "read-more-js";
    document.body.appendChild(frontEnd);
    console.log("asdf");
  }

  componentWillUnmount() {
    document.getElementById("read-more-js").remove();
  }

  render() {
    return (
      <p
        className="read-more js-read-more"
        data-btn-class="read-more__btn js-tab-focus"
        data-ellipsis="off"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio corporis
        facilis, debitis a qui eum dolor repudiandae harum, impedit, fugit
        cumque. Tenetur, a quas labore eveniet accusantium, vero reiciendis
        quaerat inventore vel consequatur iusto fugiat perferendis rerum nihil
        qui deleniti earum eum numquam velit quod explicabo, fuga saepe ad
        temporibus!
      </p>
    );
  }
}

export default ReadMore;
