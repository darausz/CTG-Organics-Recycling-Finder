export default function Map({mapType}) {
  if (mapType == "country") {
    return (
      <div className="Map-Country">
        insert map here
      </div>
    )
  }
  return (
    <div className="Map-State">
      insert map here
    </div>
  )
}

