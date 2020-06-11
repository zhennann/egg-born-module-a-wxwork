module.exports = app => {

  class Version extends app.Service {

    async update(options) {
      if (options.version === 1) {

        let sql;

        // create table: aWxworkDepartment
        sql = `
          CREATE TABLE aWxworkDepartment (
            id int(11) NOT NULL AUTO_INCREMENT,
            createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted int(11) DEFAULT '0',
            iid int(11) DEFAULT '0',
            roleId int(11) DEFAULT '0',
            departmentId int(11) DEFAULT '0',
            departmentParentId int(11) DEFAULT '0',
            departmentName varchar(255) DEFAULT NULL,
            departmentNameEn varchar(255) DEFAULT NULL,
            departmentOrder int(11) DEFAULT '0',
            PRIMARY KEY (id)
          )
        `;
        await this.ctx.model.query(sql);

        // create table: aWxworkUser
        sql = `
          CREATE TABLE aWxworkUser (
            id int(11) NOT NULL AUTO_INCREMENT,
            createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted int(11) DEFAULT '0',
            iid int(11) DEFAULT '0',
            userId int(11) DEFAULT '0',
            corpUserId varchar(255) DEFAULT NULL,
            name varchar(255) DEFAULT NULL,
            alias varchar(255) DEFAULT NULL,
            mobile varchar(255) DEFAULT NULL,
            department varchar(255) DEFAULT NULL,
            sorting varchar(255) DEFAULT NULL,
            position varchar(255) DEFAULT NULL,
            gender int(11) DEFAULT '0',
            email varchar(255) DEFAULT NULL,
            telephone varchar(255) DEFAULT NULL,
            is_leader_in_dept varchar(255) DEFAULT NULL,
            avatar_mediaid varchar(255) DEFAULT NULL,
            avatar_url varchar(255) DEFAULT NULL,
            enable int(11) DEFAULT '0',
            extattr JSON DEFAULT NULL,
            external_profile JSON DEFAULT NULL,
            external_position varchar(255) DEFAULT NULL,
            address varchar(255) DEFAULT NULL,
            main_department int(11) DEFAULT '0',
            PRIMARY KEY (id)
          )
        `;
        await this.ctx.model.query(sql);

      }
    }

    async init(options) {
    }

    async test() {
    }

  }

  return Version;
};
