package lt2020.sveikinimas.place;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lt2020.sveikinimas.congrat.CongratData;

@RestController
@Api(value = "place")
@RequestMapping(value = "/api/places")
public class PlaceController {

	@Autowired
	private PlaceService placeService;

	@RequestMapping(method = RequestMethod.GET)
	@ApiOperation(value = "Get place list", notes = "Returns all places")
	public List<PlaceData> getPlaces(@RequestParam(required = false, value = "name") String name) {
		if (name == null || name == "") {
			return placeService.getPlaces();
		}
		return placeService.getPlacesByName(name);

	}

	@RequestMapping(path = "/{id}", method = RequestMethod.GET)
	@ApiOperation(value = "Get places", notes = "Returns place with specified id")
	public PlaceData getPlace(@PathVariable final Long id) {
		return placeService.getPlace(id);
	}

	// many to many --get institutions

	@RequestMapping(path = "/congrats/{id}", method = RequestMethod.GET)
	@ApiOperation(value = "Get asociated congratulations", notes = "Returns connected congratulations for place with specified id")
	public List<CongratData> getPlaceCongrats(@PathVariable final Long id) {
		return placeService.getPlaceCongrats(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Create pace", notes = "Adds new place")
	public void addPlace(@RequestBody PlaceData data) {

		placeService.addPlace(data);
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@ApiOperation(value = "Delete place", notes = "Deletes place with specified id")
	public void deletePlace(@PathVariable final Long id) {
		placeService.deletePlace(id);
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.ACCEPTED)
	@ApiOperation(value = "Update place", notes = "Updates place with specified id")
	public void updatePlace(@PathVariable Long id, @RequestBody PlaceData data) {

		placeService.updatePlace(id, data);
	}

	public PlaceService getPlaceService() {
		return placeService;
	}

	public void setPlaceService(PlaceService placeService) {
		this.placeService = placeService;
	}

}
