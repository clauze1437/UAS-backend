// import models, disimpan kedalam variable patient
const Patient = require("../models");

// import package sequelize, disimpan kedalam variable sequelize
const Sequelize = require("sequelize");

// menggunakan package sequelize bernama Op
const Op = Sequelize.Op;

class PatientsController {
  // membuat fungsi index untuk menampilkan seluruh data
  async index(req, res) {
    // memanggil method semua dari model Patient
    const pasien = await Patient.patients.findAll();

    // mengecheck apakah data array tidak kosong
    if (pasien.length > 0) {
      const data = {
        message: "Get All Resource",
        data: pasien,
      };

      // mengembalikan response status code 200
      res.status(200).json(data);
    } else {
      // if data arraynya kosong
      const data = {
        message: "Data is empty",
      };

      // mengembalikan response  status code 200
      res.status(200).json(data);
    }
  }

  async store(req, res) {
    //merequest data pasien di body
    const pasien = await Patient.patients.create(req.body);

    // menambahkan data pasien
    const data = {
      message: "Resource is added successfully",
      data: pasien,
    };

    //mengembalikan response dalam status code 200
    res.status(201).json(data);
  }

  async update(req, res) {
    // merequest id diparameter route nya
    const { id } = req.params;

    // mencari data pasien
    const pasien = await Patient.patients.findOne({ where: { id } });

    // jika data ada maka terupdate
    if (pasien) {
      // untuk memanggil method yang di update
      await pasien.update(req.body);
      const data = {
        message: "Resource is update successfully",
        data: pasien,
      };

      // mengembalikan response dalam  status code 200
      res.status(200).json(data);
    } else {
      // jika data tidak ditemukan
      const data = {
        message: "Resource not found",
      };

      // memberikan response dengan status code 404
      res.status(404).json(data);
    }
  }

  async destroy(req, res) {
    // merequest id di parameter
    const { id } = req.params;

    // mencari data yang ingin dihapus
    const pasien = await Patient.patients.findOne({ where: { id } });

    // jika data ada maka akan dihapus
    if (pasien) {
      // memanggil data yg ingin dihapus
      await pasien.destroy();
      const data = {
        message: "Resource is delete successfully",
      };

      // memberikan response dengan status code 200
      res.status(200).json(data);
    } else {
      const data = {
        message: "Resource not found",
      };

      // memberikan response dengan status code 404
      res.status(404).json(data);
    }
  }

  async show(req, res) {
    // merequest id di parameter
    const { id } = req.params;
    const pasien = await Patient.patients.findOne({ where: { id } });

    // jika data ditemukan
    if (pasien) {
      const data = {
        message: "Get Detail Resource",
        data: pasien,
      };

      // memberikan response dengan status code 200
      res.status(200).json(data);
    } else {
      const data = {
        message: "Resource not found",
      };

      res.status(404).json(data);
    }
  }

  async recovered(req, res) {
    // membuat parameter pasien yang recovered
    const pasien = await Patient.patients.findAll({
      where: { status: "recovered" },
    });

    // menampilkan status pasien yang recovered
    const data = {
      message: "Get recovered resource",
      data: pasien,
    };

    // memberikan response dengan status code 200
    res.status(200).json(data);
  }

  async positive(req, res) {
    // membuat parameter pasien yang positive
    const pasien = await Patient.patients.findAll({
      where: { status: "positive" },
    });

    // menampilkan data pasien yang positive
    const data = {
      message: "Get positive resource",
      data: pasien,
    };

    // memberikan response dengan status code 200
    res.status(200).json(data);
  }

  async dead(req, res) {
    // membuat parameter pasien yang dead
    const pasien = await Patient.patients.findAll({
      where: { status: "dead" },
    });

    // menampilkan data pasien yang dead
    const data = {
      message: "Get dead resource",
      data: pasien,
    };

    //memberikan response dengan status code 200
    res.status(200).json(data);
  }

  async search(req, res) {
    // merequest data pasien berdasarkan nama di params
    const { name } = req.params;

    // mencari nama pasien sesuai yang ada di database
    const pasien = await Patient.patients.findAll({
      where: { name: { [Op.like]: "%" + name + "%" } },
    });

    // jika data ditemukan
    if (pasien.length > 0) {
      const data = {
        message: "Get searched resource",
        data: pasien,
      };

      res.status(200).json(data);
    }
    // jika data tidak ditemukan
    else {
      const data = {
        message: "Resource not found",
      };

      res.status(404).json(data);
    }
  }
}

// membuat object baru patient controller
const obj = new PatientsController();

// export module object
module.exports = obj;
