const local_storage = require("../mock/data");

class TravelController {
    static GetPlansByCountry = async (req, res) => {
        let country = req.params.country;
        console.log(req.params.country);
        let items = local_storage;

        try {
            res.status(200).json(
                items.filter(
                    (item) => item.country.toLowerCase() == country
                )
            )
        } catch (error) {
            console.error(error);
            res
              .status(500)
              .json({ message: "Error fetching country.", error: error.message });
        }
    }

    static GetAllPlans = async (req, res) => {
        let items = local_storage;

        try {
            res.status(200).json({
                items
            });
        } catch(error) {
            console.error(error);
            res
              .status(500)
              .json({ message: "Error fetching country.", error: error.message });
        }
    }
}

module.exports = TravelController;