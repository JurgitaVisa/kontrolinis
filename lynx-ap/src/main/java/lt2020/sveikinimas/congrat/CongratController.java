package lt2020.sveikinimas.congrat;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lt2020.sveikinimas.place.PlaceData;

@RestController
@Api(value = "congratulations")
@RequestMapping(value = "/api/congratulations")
public class CongratController {

	@Autowired
	private CongratService congratulationService;

//	get list of  -- find by name or default all

	@RequestMapping(method = RequestMethod.GET)
	@ApiOperation(value = "Get congratulation list", notes = "Returns all congratulations")
	public List<CongratData> getCongratulations() {

		return congratulationService.getCongratulations();

	}

//	get list of  -- many to many

	@RequestMapping(path = "/places/{id}", method = RequestMethod.GET)
	@ApiOperation(value = "Get palce list", notes = "Returns all places connected to congratulation with specified id")
	public List<PlaceData> getPlaceList(@PathVariable final Long id) {

		return congratulationService.getPlaceList(id);

	}

	// remove from list -- many to many

	@RequestMapping(path = "{id}/places/{placeId}", method = RequestMethod.DELETE)
	@ApiOperation(value = "Remove place from list", notes = "Returns remaining places connected to congrat with specified id")
	public List<PlaceData> deletePlaceFromList(@PathVariable final Long placeId, @PathVariable final Long id) {

		return congratulationService.deletePlaceFromList(placeId, id);

	}

// add  to list -- many to many

	@RequestMapping(path = "{id}/places/{placeId}", method = RequestMethod.POST)
	@ApiOperation(value = "Add places to list", notes = "Connect place to congrat with specified id")
	public void addPlaceToList(@PathVariable final Long id, @PathVariable Long placeId) {

		congratulationService.addPlaceToList(id, placeId);

	}

	@RequestMapping(path = "/{id}", method = RequestMethod.GET)
	@ApiOperation(value = "Get congratulations", notes = "Returns congratulations with specified id")
	public CongratData getCongratulation(@PathVariable final Long id) {
		return congratulationService.getCongratulation(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Create congratulation", notes = "Adds new congratulation")
	public void addCongratulation(@RequestBody CongratData data) {

		congratulationService.addCongratulation(data);
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@ApiOperation(value = "Delete congratulation", notes = "Deletes congratulation with specified id")
	public void deleteCongratulation(@PathVariable final Long id) {
		congratulationService.deleteCongratulation(id);
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.ACCEPTED)
	@ApiOperation(value = "Update congratulation", notes = "Updates congratulation with specified id")
	public void updateCongratulation(@PathVariable Long id, @RequestBody CongratData data) {

		congratulationService.updateCongratulation(id, data);
	}

	public CongratService getCongratulationService() {
		return congratulationService;
	}

	public void setCongratulationService(CongratService congratulationService) {
		this.congratulationService = congratulationService;
	}

}
