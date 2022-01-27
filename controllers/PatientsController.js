// import model, sequelize dan menggunakan method Op
const Patient = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class PatientsController {
  // fungsi index sebagai menampilkan seluruh data
  async index(req, res) {
    const patients = await Patient.patients.findAll();

    if (patients.length > 0) {
      const data = {
        message: "Get All Resource",
        data: patients,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: "Data is empty",
      };
      res.status(200).json(data);
    }
  }

  // fungsi store sebagai membuat data baru
  async store(req, res) {
    const patients = await Patient.patients.create(req.body);
    const data = {
      message: "Resource is added successfully",
      data: patients,
    };
    res.status(201).json(data);
  }

  // fungsi update sebagai menggantikan data lama
  async update(req, res) {
    const { id } = req.params;
    const patients = await Patient.patients.findOne({ where: { id } });

    if (patients) {
      await patients.update(req.body);
      const data = {
        message: "Resource is update successfully",
        data: patients,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: "Resource not found",
      };
      res.status(404).json(data);
    }
  }

  // fungsi destroy sebagai hapus data permanen di db
  async destroy(req, res) {
    const { id } = req.params;
    const patients = await Patient.patients.findOne({ where: { id } });

    if (patients) {
      await patients.destroy();
      const data = {
        message: "Resource is delete successfully",
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: "Resource not found",
      };
      res.status(404).json(data);
    }
  }

  // fungsi show sebagai detail satu data patient
  async show(req, res) {
    const { id } = req.params;
    const patients = await Patient.patients.findOne({ where: { id } });

    if (patients) {
      const data = {
        message: "Get Detail Resource",
        data: patients,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: "Resource not found",
      };
      res.status(404).json(data);
    }
  }

  // fungsi recovered sebagai tampilin data patient status recovered
  async recovered(req, res) {
    const patients = await Patient.patients.findAll({
      where: { status: "recovered" },
    });

    const data = {
      message: "Get recovered resource",
      data: patients,
    };
    res.status(200).json(data);
  }

  // fungsi positive sebagai tampilin data patient status positive
  async positive(req, res) {
    const pasien = await Patient.patients.findAll({
      where: { status: "positive" },
    });

    const data = {
      message: "Get positive resource",
      data: pasien,
    };
    res.status(200).json(data);
  }

  // fungsi dead sebagai tampilin data patient status dead
  async dead(req, res) {
    const pasien = await Patient.patients.findAll({
      where: { status: "dead" },
    });

    const data = {
      message: "Get dead resource",
      data: pasien,
    };
    res.status(200).json(data);
  }

  // fungsi search sebagai pencari nama patient
  async search(req, res) {
    const { name } = req.params;
    const pasien = await Patient.patients.findAll({
      where: { name: { [Op.like]: "%" + name + "%" } },
    });

    if (pasien.length > 0) {
      const data = {
        message: "Get searched resource",
        data: pasien,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: "Resource not found",
      };
      res.status(404).json(data);
    }
  }
}

const obj = new PatientsController();

// export module object
module.exports = obj;
