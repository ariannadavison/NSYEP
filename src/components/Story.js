export default function Story(props) {
  return (
    <div>
      this is where the person's story goes.<br />

      this is the individual story of the person known as {props.match.params.storyName} from the region called {props.match.params.regionName}.
    </div>
  )
}