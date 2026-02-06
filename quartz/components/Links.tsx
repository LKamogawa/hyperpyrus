import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/links.scss"
import { GlobalConfiguration } from "../cfg"

interface Options {
  title: string
}

const defaultOptions = (cfg: GlobalConfiguration): Options => ({
  title: "",
})

export default ((userOpts?: Partial<Options>) => {
  function Links({ allFiles, fileData, displayClass, cfg }: QuartzComponentProps) {
    const opts = { ...defaultOptions(cfg), ...userOpts }
    return (
      <div class={`links ${displayClass ?? ""}`}>
        <h3>{opts.title}</h3>
        <ul>
          <li>
            <h3 style={{ marginTop: 0, marginBottom: 0 }}>
              <a href="/notes">Notes</a>
            </h3>
            <i>the joy to share your discoveries</i>
          </li>
          <li>
            <h3 style={{ marginTop: 0, marginBottom: 0 }}>
              <a href="/essays">Essays</a>
            </h3>
            <i>take a seat, I have a lot to say</i>
          </li>
          <li>
            <h3 style={{ marginTop: 0, marginBottom: 0 }}>
              <a href="/daydreams">Daydreams</a>
            </h3>
            <i>introspection coming out</i>
          </li>
          <li>
            <h3 style={{ marginTop: 0, marginBottom: 0 }}>
              <a href="/reviews">Reviews</a>
            </h3>
            <i>my trashes and treasures</i>
          </li>
          <li>
            <h3 style={{ marginTop: 0, marginBottom: 0 }}>
              <a href="/vernissage">Vernissage</a>
            </h3>
            <i>you're invited to see my oeuvre</i>
          </li>
          <li>
            <h3 style={{ marginTop: 0, marginBottom: 0 }}>
              <a href="/misc">Misc</a>
            </h3>
            <i>where the unfittable can fit</i>
          </li>
        </ul>
      </div>
    )
  }

  Links.css = style
  return Links
}) satisfies QuartzComponentConstructor
