export default function Region (props) {
  console.log(props.match.params.regionName);
  let name = props.match.params.regionName;
  // the name comes through as the url, so we must name-ify it.
  name = name.replace(/-/g,' ');
  name = name.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

  return (
    <div>
      i am a region.<br />
      specifically, the region known as {name}.
    </div>
  )
}