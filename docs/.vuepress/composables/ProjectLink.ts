
import type { FunctionalComponent, PropType } from "vue";
import { h, resolveComponent } from "vue";

declare const IS_NETLIFY: boolean;
declare const IS_GITEE: boolean;

export interface ProjectLinkProps {
  type?: "plugin" | "theme";
  name: string;
  path?: string;
}

const ProjectLink: FunctionalComponent<
  ProjectLinkProps,
  Record<never, never>,
  { default: () => string }
> = ({ name, type = "plugin", path = "/" }, { slots }) => {
  const base = name === "viptv" ? "" : `/${name.replace(/\d+$/, "")}`;

  return h(
    "a",
    {
      hrefp: `https://${IS_NETLIFY
        ? `${type ?? "plugin"}-${name}.vuejs.press${path}`
        : `vuepress-theme-hope.${IS_GITEE ? "gitee" : "github"
        }.io/v2${base}`
        }`,
      target: "_blank",
    },
    [slots.default(), h(resolveComponent("ExternalLinkIcon"))],
  );
};

ProjectLink.displayName = "ProjectLink";

ProjectLink.props = {
  /**
   * Plugin type
   */
  type: {
    type: String as PropType<"plugin" | "theme">,
    default: "plugin",
  },

  /**
   * Plugin name
   */
  name: {
    type: String,
    required: true,
  },

  /**
   * Link pathname
   */
  path: {
    type: String,
    default: "/",
  },
};

export default ProjectLink;