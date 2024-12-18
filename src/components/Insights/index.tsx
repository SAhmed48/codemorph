import SectionTitle from "../Common/SectionTitle";
import blogData from "../Blog/blogData";
import SingleBlog from "../Blog/SingleBlog";

const Insights = () => {

  return (
    <section id="insights" className="py-12 md:py-12 lg:py-12">
    <div className="container">
      <SectionTitle
        title="Our Insights"
        paragraph="Challenge your thinking with thought-provoking insights - read our blogs below!"
        center
        width="1000px"
      />

<div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>


    </div>
  </section>
  );
};

export default Insights;