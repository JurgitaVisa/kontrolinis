package lt2020.sveikinimas.congrat;

import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt2020.sveikinimas.place.Place;
import lt2020.sveikinimas.place.PlaceDAO;
import lt2020.sveikinimas.place.PlaceData;
import lt2020.sveikinimas.congrat.CongratDAO;


@Service
public class CongratService {

	@Autowired
	private CongratDAO congratDao;

	@Autowired
	private PlaceDAO placeDao;

	@Transactional(readOnly = true)
	public List<CongratData> getCongratulations() {
		return congratDao.findAll().stream()
				.map(congr -> new CongratData(congr.getId(), congr.getName(), congr.getText(), congr.getPicture(),
						congr.getPerson(), congr.getAudio(), congr.getType(), congr.getDate()))
				.collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public CongratData getCongratulation(Long id) {
		Congrat congr = congratDao.getOne(id);

		return new CongratData(congr.getId(), congr.getName(), congr.getText(), congr.getPicture(), congr.getPerson(),
				congr.getAudio(), congr.getType(), congr.getDate());
	}

	@Transactional
	public void addCongratulation(CongratData data) {
		String name = data.getName();
		String text = data.getText();
		String picture = data.getPicture();
		String person = data.getPerson();
		String audio = data.getAudio();
		String type = data.getType();
		Date date = data.getDate();

		congratDao.save(new Congrat(name, text, picture, person, audio, type, date));
	}

	@Transactional
	public void deleteCongratulation(Long id) {
		congratDao.deleteById(id);

	}

	@Transactional
	public void updateCongratulation(Long id, CongratData data) {
		Congrat congratFromDB = congratDao.getOne(id);

		if (congratFromDB != null) {
			congratFromDB.setName(data.getName());
			congratFromDB.setText(data.getText());
			congratFromDB.setPicture(data.getPicture());
			congratFromDB.setPerson(data.getPerson());
			congratFromDB.setAudio(data.getAudio());
			congratFromDB.setType(data.getType());
			congratFromDB.setDate(data.getDate());

			congratDao.save(congratFromDB);
		}
	}

//	get list of  -- many to many
//
	@Transactional(readOnly = true)
	public List<PlaceData> getPlaceList(Long id) {
		Congrat congr = congratDao.getOne(id);
		Set<Place> places = congr.getPlaces();
		return places.stream()
				.map(place -> new PlaceData(place.getId(), place.getName(), place.getPicture(), place.getAddress()))
				.collect(Collectors.toList());
	}

//	remove  from list -- many to many

	@Transactional
	public List<PlaceData> deletePlaceFromList(Long placeId, Long congratId) {
		Congrat inst = congratDao.getOne(congratId);
		inst.removePlace(placeDao.getOne(placeId));
		congratDao.save(inst);
		return getPlaceList(congratId);
	}

//	add  to list -- many to many

	@Transactional
	public void addPlaceToList(Long id, Long placeId) {
		Place place = placeDao.getOne(placeId);

		Congrat congr = congratDao.getOne(id);
		congr.addPlace(place);

		congratDao.save(congr);

	}

	public CongratDAO getCongratDao() {
		return congratDao;
	}

	public void setCongratDao(CongratDAO congratDao) {
		this.congratDao = congratDao;
	}

	public PlaceDAO getPlaceDao() {
		return placeDao;
	}

	public void setPlaceDao(PlaceDAO placeDao) {
		this.placeDao = placeDao;
	}

}
