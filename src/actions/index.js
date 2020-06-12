import flats from '../flats';

export function setFlats() {
  // todo: api call

  return {
    type: 'SET_FLATS',
    payload: flats
  }
}

export function selectFlat(flat ) {
  return {
    type: 'SELECT_FLAT',
    payload: flat
  }

}
