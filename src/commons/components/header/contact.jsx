import classNames from "classnames";
const Contact = ({ className = "" }) => {
  const classes = classNames("flex flex-row gap-5 items-center", className);
  return (
    <div className={classes}>
      <a className="text-red-500 text-xl font-bold" href="tel:+84333434001">
        +84333434001
      </a>
    </div>
  );
};

export default Contact;
