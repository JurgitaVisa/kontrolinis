package lt2020.sveikinimas.place;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt2020.sveikinimas.congrat.Congrat;
import lt2020.sveikinimas.congrat.CongratDAO;
import lt2020.sveikinimas.congrat.CongratData;

@Service
public class PlaceService {

	@Autowired
	private PlaceDAO placeDao;

	@Autowired
	private CongratDAO congratDao;

	@Transactional(readOnly = true)
	public List<PlaceData> getPlaces() {
		return placeDao.findAll().stream()
				.map(place -> new PlaceData(place.getId(), place.getName(), place.getPicture(), place.getAddress()))
				.collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public PlaceData getPlace(Long id) {
		Place place = placeDao.getOne(id);

		return new PlaceData(place.getId(), place.getName(), place.getPicture(), place.getAddress());
	}

	@Transactional(readOnly = true)
	public List<PlaceData> getPlacesByName(String name) {
		List<Place> placesByName = placeDao.findByNameFragment(name);
		return placesByName.stream()
				.map(place -> new PlaceData(place.getId(), place.getName(), place.getPicture(), place.getAddress()))
				.collect(Collectors.toList());
	}

	// many to one -- get institution
	@Transactional(readOnly = true)
	public List<CongratData> getPlaceCongrats(Long id) {
		Place place = placeDao.getOne(id);
		Set<Congrat> congratList = place.getInstitutions();
		return congratList.stream()
				.map(congr -> new CongratData(congr.getId(), congr.getName(), congr.getText(), congr.getPicture(),
						congr.getPerson(), congr.getAudio(), congr.getType(), congr.getDate()))
				.collect(Collectors.toList());
	}

	@Transactional
	public void addPlace(PlaceData data) {
		String name = data.getName();
		String picture = data.getPicture();
		String address = data.getAddress();

		placeDao.save(new Place(name, picture, address));
	}

	@Transactional
	public void deletePlace(Long id) {
		placeDao.deleteById(id);

	}

	@Transactional
	public void updatePlace(Long id, PlaceData data) {
		Place placeFromDB = placeDao.getOne(id);
		if (placeFromDB != null) {
			placeFromDB.setName(data.getName());
			placeFromDB.setPicture(data.getPicture());
			placeFromDB.setAddress(data.getAddress());

			placeDao.save(placeFromDB);
		}

	}

	public PlaceDAO getPlaceDao() {
		return placeDao;
	}

	public void setPlaceDao(PlaceDAO placeDao) {
		this.placeDao = placeDao;
	}

	public CongratDAO getCongratDao() {
		return congratDao;
	}

	public void setCongratDao(CongratDAO congratDao) {
		this.congratDao = congratDao;
	}

}
