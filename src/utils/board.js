import {Players, Markers} from "../constants";

const mapPlayerToMarker = new Map([
  [Players.Player1, Markers.Marker1],
  [Players.Player2, Markers.Marker2]
]);

export const getMarker = (player) => mapPlayerToMarker.get(player);

export const isTileEmpty = ({value}) => value.length === 0;
