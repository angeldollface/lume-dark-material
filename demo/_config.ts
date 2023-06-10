import lume from "lume/mod.ts";
import blog from "https://raw.githubusercontent.com/angeldollface/lume-dark-material/main/mod.ts";

const site = lume();

site.use(blog());

export default site;
