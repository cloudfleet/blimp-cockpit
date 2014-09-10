--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'SQL_ASCII';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: oc_activity; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_activity (
    activity_id integer NOT NULL,
    "timestamp" integer DEFAULT 0 NOT NULL,
    priority integer DEFAULT 0 NOT NULL,
    type integer DEFAULT 0 NOT NULL,
    "user" character varying(255) NOT NULL,
    affecteduser character varying(255) NOT NULL,
    app character varying(255) NOT NULL,
    subject character varying(255) NOT NULL,
    subjectparams character varying(255) NOT NULL,
    message character varying(255) DEFAULT NULL::character varying,
    messageparams character varying(255) DEFAULT NULL::character varying,
    file character varying(255) DEFAULT NULL::character varying,
    link character varying(255) DEFAULT NULL::character varying
);


ALTER TABLE public.oc_activity OWNER TO blimp;

--
-- Name: oc_activity_activity_id_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_activity_activity_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_activity_activity_id_seq OWNER TO blimp;

--
-- Name: oc_activity_activity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_activity_activity_id_seq OWNED BY oc_activity.activity_id;


--
-- Name: oc_appconfig; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_appconfig (
    appid character varying(32) DEFAULT ''::character varying NOT NULL,
    configkey character varying(64) DEFAULT ''::character varying NOT NULL,
    configvalue text
);


ALTER TABLE public.oc_appconfig OWNER TO blimp;

--
-- Name: oc_clndr_calendars; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_clndr_calendars (
    id integer NOT NULL,
    userid character varying(255) DEFAULT NULL::character varying,
    displayname character varying(100) DEFAULT NULL::character varying,
    uri character varying(255) DEFAULT NULL::character varying,
    active integer DEFAULT 1 NOT NULL,
    ctag integer DEFAULT 0 NOT NULL,
    calendarorder integer DEFAULT 0 NOT NULL,
    calendarcolor character varying(10) DEFAULT NULL::character varying,
    timezone text,
    components character varying(100) DEFAULT NULL::character varying
);


ALTER TABLE public.oc_clndr_calendars OWNER TO blimp;

--
-- Name: oc_clndr_calendars_id_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_clndr_calendars_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_clndr_calendars_id_seq OWNER TO blimp;

--
-- Name: oc_clndr_calendars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_clndr_calendars_id_seq OWNED BY oc_clndr_calendars.id;


--
-- Name: oc_clndr_objects; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_clndr_objects (
    id integer NOT NULL,
    calendarid integer DEFAULT 0 NOT NULL,
    objecttype character varying(40) DEFAULT ''::character varying NOT NULL,
    startdate timestamp(0) without time zone DEFAULT '1970-01-01 00:00:00'::timestamp without time zone,
    enddate timestamp(0) without time zone DEFAULT '1970-01-01 00:00:00'::timestamp without time zone,
    repeating integer DEFAULT 0,
    summary character varying(255) DEFAULT NULL::character varying,
    calendardata text,
    uri character varying(255) DEFAULT NULL::character varying,
    lastmodified integer DEFAULT 0
);


ALTER TABLE public.oc_clndr_objects OWNER TO blimp;

--
-- Name: oc_clndr_objects_id_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_clndr_objects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_clndr_objects_id_seq OWNER TO blimp;

--
-- Name: oc_clndr_objects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_clndr_objects_id_seq OWNED BY oc_clndr_objects.id;


--
-- Name: oc_clndr_repeat; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_clndr_repeat (
    id integer NOT NULL,
    eventid integer DEFAULT 0 NOT NULL,
    calid integer DEFAULT 0 NOT NULL,
    startdate timestamp(0) without time zone DEFAULT '1970-01-01 00:00:00'::timestamp without time zone,
    enddate timestamp(0) without time zone DEFAULT '1970-01-01 00:00:00'::timestamp without time zone
);


ALTER TABLE public.oc_clndr_repeat OWNER TO blimp;

--
-- Name: oc_clndr_repeat_id_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_clndr_repeat_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_clndr_repeat_id_seq OWNER TO blimp;

--
-- Name: oc_clndr_repeat_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_clndr_repeat_id_seq OWNED BY oc_clndr_repeat.id;


--
-- Name: oc_clndr_share_calendar; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_clndr_share_calendar (
    owner character varying(255) NOT NULL,
    share character varying(255) NOT NULL,
    sharetype character varying(6) NOT NULL,
    calendarid bigint DEFAULT 0::bigint NOT NULL,
    permissions smallint NOT NULL,
    active integer DEFAULT 1 NOT NULL
);


ALTER TABLE public.oc_clndr_share_calendar OWNER TO blimp;

--
-- Name: oc_clndr_share_event; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_clndr_share_event (
    owner character varying(255) NOT NULL,
    share character varying(255) NOT NULL,
    sharetype character varying(6) NOT NULL,
    eventid bigint DEFAULT 0::bigint NOT NULL,
    permissions smallint NOT NULL
);


ALTER TABLE public.oc_clndr_share_event OWNER TO blimp;

--
-- Name: oc_contacts_addressbooks; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_contacts_addressbooks (
    id integer NOT NULL,
    userid character varying(255) DEFAULT ''::character varying NOT NULL,
    displayname character varying(255) DEFAULT NULL::character varying,
    uri character varying(200) DEFAULT NULL::character varying,
    description character varying(255) DEFAULT NULL::character varying,
    ctag integer DEFAULT 1 NOT NULL,
    active integer DEFAULT 1 NOT NULL
);


ALTER TABLE public.oc_contacts_addressbooks OWNER TO blimp;

--
-- Name: oc_contacts_addressbooks_id_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_contacts_addressbooks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_contacts_addressbooks_id_seq OWNER TO blimp;

--
-- Name: oc_contacts_addressbooks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_contacts_addressbooks_id_seq OWNED BY oc_contacts_addressbooks.id;


--
-- Name: oc_contacts_cards; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_contacts_cards (
    id integer NOT NULL,
    addressbookid integer DEFAULT 0 NOT NULL,
    fullname character varying(255) DEFAULT NULL::character varying,
    carddata text,
    uri character varying(200) DEFAULT NULL::character varying,
    lastmodified integer DEFAULT 0
);


ALTER TABLE public.oc_contacts_cards OWNER TO blimp;

--
-- Name: oc_contacts_cards_id_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_contacts_cards_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_contacts_cards_id_seq OWNER TO blimp;

--
-- Name: oc_contacts_cards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_contacts_cards_id_seq OWNED BY oc_contacts_cards.id;


--
-- Name: oc_contacts_cards_properties; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_contacts_cards_properties (
    id integer NOT NULL,
    userid character varying(255) DEFAULT ''::character varying NOT NULL,
    contactid integer DEFAULT 0 NOT NULL,
    name character varying(64) DEFAULT NULL::character varying,
    value character varying(255) DEFAULT NULL::character varying,
    preferred integer DEFAULT 1 NOT NULL
);


ALTER TABLE public.oc_contacts_cards_properties OWNER TO blimp;

--
-- Name: oc_contacts_cards_properties_id_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_contacts_cards_properties_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_contacts_cards_properties_id_seq OWNER TO blimp;

--
-- Name: oc_contacts_cards_properties_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_contacts_cards_properties_id_seq OWNED BY oc_contacts_cards_properties.id;


--
-- Name: oc_documents_invite; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_documents_invite (
    es_id character varying(64) NOT NULL,
    uid character varying(64) NOT NULL,
    status smallint DEFAULT 0::smallint,
    sent_on integer DEFAULT 0
);


ALTER TABLE public.oc_documents_invite OWNER TO blimp;

--
-- Name: oc_documents_member; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_documents_member (
    member_id integer NOT NULL,
    es_id character varying(64) NOT NULL,
    uid character varying(64) NOT NULL,
    color character varying(32) NOT NULL,
    last_activity integer NOT NULL,
    is_guest smallint DEFAULT 0::smallint NOT NULL,
    token character varying(32) DEFAULT NULL::character varying,
    status smallint DEFAULT 1::smallint NOT NULL
);


ALTER TABLE public.oc_documents_member OWNER TO blimp;

--
-- Name: oc_documents_member_member_id_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_documents_member_member_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_documents_member_member_id_seq OWNER TO blimp;

--
-- Name: oc_documents_member_member_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_documents_member_member_id_seq OWNED BY oc_documents_member.member_id;


--
-- Name: oc_documents_op; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_documents_op (
    seq integer NOT NULL,
    es_id character varying(64) NOT NULL,
    member integer DEFAULT 1 NOT NULL,
    opspec text
);


ALTER TABLE public.oc_documents_op OWNER TO blimp;

--
-- Name: oc_documents_op_seq_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_documents_op_seq_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_documents_op_seq_seq OWNER TO blimp;

--
-- Name: oc_documents_op_seq_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_documents_op_seq_seq OWNED BY oc_documents_op.seq;


--
-- Name: oc_documents_revisions; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_documents_revisions (
    es_id character varying(64) NOT NULL,
    seq_head integer NOT NULL,
    member_id integer NOT NULL,
    file_id character varying(512) NOT NULL,
    save_hash character varying(128) NOT NULL
);


ALTER TABLE public.oc_documents_revisions OWNER TO blimp;

--
-- Name: oc_documents_session; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_documents_session (
    es_id character varying(64) NOT NULL,
    genesis_url character varying(512) NOT NULL,
    genesis_hash character varying(128) NOT NULL,
    file_id character varying(512) NOT NULL,
    owner character varying(64) NOT NULL
);


ALTER TABLE public.oc_documents_session OWNER TO blimp;

--
-- Name: oc_file_map; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_file_map (
    logic_path character varying(512) DEFAULT ''::character varying NOT NULL,
    logic_path_hash character varying(32) DEFAULT ''::character varying NOT NULL,
    physic_path character varying(512) DEFAULT ''::character varying NOT NULL,
    physic_path_hash character varying(32) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.oc_file_map OWNER TO blimp;

--
-- Name: oc_filecache; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_filecache (
    fileid integer NOT NULL,
    storage integer DEFAULT 0 NOT NULL,
    path character varying(512) DEFAULT NULL::character varying,
    path_hash character varying(32) DEFAULT ''::character varying NOT NULL,
    parent integer DEFAULT 0 NOT NULL,
    name character varying(250) DEFAULT NULL::character varying,
    mimetype integer DEFAULT 0 NOT NULL,
    mimepart integer DEFAULT 0 NOT NULL,
    size bigint DEFAULT 0::bigint NOT NULL,
    mtime integer DEFAULT 0 NOT NULL,
    storage_mtime integer DEFAULT 0 NOT NULL,
    encrypted integer DEFAULT 0 NOT NULL,
    unencrypted_size bigint DEFAULT 0::bigint NOT NULL,
    etag character varying(40) DEFAULT NULL::character varying
);


ALTER TABLE public.oc_filecache OWNER TO blimp;

--
-- Name: oc_filecache_fileid_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_filecache_fileid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_filecache_fileid_seq OWNER TO blimp;

--
-- Name: oc_filecache_fileid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_filecache_fileid_seq OWNED BY oc_filecache.fileid;


--
-- Name: oc_files_trash; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_files_trash (
    id character varying(250) DEFAULT ''::character varying NOT NULL,
    "user" character varying(64) DEFAULT ''::character varying NOT NULL,
    "timestamp" character varying(12) DEFAULT ''::character varying NOT NULL,
    location character varying(512) DEFAULT ''::character varying NOT NULL,
    type character varying(4) DEFAULT ''::character varying NOT NULL,
    mime character varying(255) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.oc_files_trash OWNER TO blimp;

--
-- Name: oc_files_trashsize; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_files_trashsize (
    "user" character varying(64) DEFAULT ''::character varying NOT NULL,
    size character varying(50) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.oc_files_trashsize OWNER TO blimp;

--
-- Name: oc_files_versions; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_files_versions (
    "user" character varying(64) DEFAULT ''::character varying NOT NULL,
    size character varying(50) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.oc_files_versions OWNER TO blimp;

--
-- Name: oc_gallery_sharing; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_gallery_sharing (
    token character varying(64) NOT NULL,
    gallery_id integer DEFAULT 0 NOT NULL,
    recursive smallint NOT NULL
);


ALTER TABLE public.oc_gallery_sharing OWNER TO blimp;

--
-- Name: oc_group_admin; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_group_admin (
    gid character varying(64) DEFAULT ''::character varying NOT NULL,
    uid character varying(64) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.oc_group_admin OWNER TO blimp;

--
-- Name: oc_group_user; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_group_user (
    gid character varying(64) DEFAULT ''::character varying NOT NULL,
    uid character varying(64) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.oc_group_user OWNER TO blimp;

--
-- Name: oc_groups; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_groups (
    gid character varying(64) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.oc_groups OWNER TO blimp;

--
-- Name: oc_jobs; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_jobs (
    id integer NOT NULL,
    class character varying(255) DEFAULT ''::character varying NOT NULL,
    argument character varying(256) DEFAULT ''::character varying NOT NULL,
    last_run integer DEFAULT 0
);


ALTER TABLE public.oc_jobs OWNER TO blimp;

--
-- Name: oc_jobs_id_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_jobs_id_seq OWNER TO blimp;

--
-- Name: oc_jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_jobs_id_seq OWNED BY oc_jobs.id;


--
-- Name: oc_ldap_group_mapping; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_ldap_group_mapping (
    ldap_dn character varying(255) DEFAULT ''::character varying NOT NULL,
    owncloud_name character varying(255) DEFAULT ''::character varying NOT NULL,
    directory_uuid character varying(255) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.oc_ldap_group_mapping OWNER TO blimp;

--
-- Name: oc_ldap_group_members; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_ldap_group_members (
    owncloudname character varying(255) DEFAULT ''::character varying NOT NULL,
    owncloudusers text NOT NULL
);


ALTER TABLE public.oc_ldap_group_members OWNER TO blimp;

--
-- Name: oc_ldap_user_mapping; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_ldap_user_mapping (
    ldap_dn character varying(255) DEFAULT ''::character varying NOT NULL,
    owncloud_name character varying(255) DEFAULT ''::character varying NOT NULL,
    directory_uuid character varying(255) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.oc_ldap_user_mapping OWNER TO blimp;

--
-- Name: oc_locks; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_locks (
    id integer NOT NULL,
    userid character varying(64) DEFAULT NULL::character varying,
    owner character varying(100) DEFAULT NULL::character varying,
    timeout integer,
    created bigint,
    token character varying(100) DEFAULT NULL::character varying,
    scope smallint,
    depth smallint,
    uri text
);


ALTER TABLE public.oc_locks OWNER TO blimp;

--
-- Name: oc_locks_id_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_locks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_locks_id_seq OWNER TO blimp;

--
-- Name: oc_locks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_locks_id_seq OWNED BY oc_locks.id;


--
-- Name: oc_lucene_status; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_lucene_status (
    fileid integer DEFAULT 0 NOT NULL,
    status character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public.oc_lucene_status OWNER TO blimp;

--
-- Name: oc_mimetypes; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_mimetypes (
    id integer NOT NULL,
    mimetype character varying(255) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.oc_mimetypes OWNER TO blimp;

--
-- Name: oc_mimetypes_id_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_mimetypes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_mimetypes_id_seq OWNER TO blimp;

--
-- Name: oc_mimetypes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_mimetypes_id_seq OWNED BY oc_mimetypes.id;


--
-- Name: oc_permissions; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_permissions (
    fileid integer DEFAULT 0 NOT NULL,
    "user" character varying(64) DEFAULT NULL::character varying,
    permissions integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.oc_permissions OWNER TO blimp;

--
-- Name: oc_pictures_images_cache; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_pictures_images_cache (
    uid_owner character varying(64) NOT NULL,
    path character varying(256) NOT NULL,
    width integer NOT NULL,
    height integer NOT NULL
);


ALTER TABLE public.oc_pictures_images_cache OWNER TO blimp;

--
-- Name: oc_preferences; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_preferences (
    userid character varying(64) DEFAULT ''::character varying NOT NULL,
    appid character varying(32) DEFAULT ''::character varying NOT NULL,
    configkey character varying(64) DEFAULT ''::character varying NOT NULL,
    configvalue text
);


ALTER TABLE public.oc_preferences OWNER TO blimp;

--
-- Name: oc_privatedata; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_privatedata (
    keyid integer NOT NULL,
    "user" character varying(255) DEFAULT ''::character varying NOT NULL,
    app character varying(255) DEFAULT ''::character varying NOT NULL,
    key character varying(255) DEFAULT ''::character varying NOT NULL,
    value character varying(255) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.oc_privatedata OWNER TO blimp;

--
-- Name: oc_privatedata_keyid_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_privatedata_keyid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_privatedata_keyid_seq OWNER TO blimp;

--
-- Name: oc_privatedata_keyid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_privatedata_keyid_seq OWNED BY oc_privatedata.keyid;


--
-- Name: oc_properties; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_properties (
    id integer NOT NULL,
    userid character varying(64) DEFAULT ''::character varying NOT NULL,
    propertypath character varying(255) DEFAULT ''::character varying NOT NULL,
    propertyname character varying(255) DEFAULT ''::character varying NOT NULL,
    propertyvalue character varying(255) NOT NULL
);


ALTER TABLE public.oc_properties OWNER TO blimp;

--
-- Name: oc_properties_id_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_properties_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_properties_id_seq OWNER TO blimp;

--
-- Name: oc_properties_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_properties_id_seq OWNED BY oc_properties.id;


--
-- Name: oc_share; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_share (
    id integer NOT NULL,
    share_type smallint DEFAULT 0::smallint NOT NULL,
    share_with character varying(255) DEFAULT NULL::character varying,
    uid_owner character varying(255) DEFAULT ''::character varying NOT NULL,
    parent integer,
    item_type character varying(64) DEFAULT ''::character varying NOT NULL,
    item_source character varying(255) DEFAULT NULL::character varying,
    item_target character varying(255) DEFAULT NULL::character varying,
    file_source integer,
    file_target character varying(512) DEFAULT NULL::character varying,
    permissions smallint DEFAULT 0::smallint NOT NULL,
    stime bigint DEFAULT 0::bigint NOT NULL,
    accepted smallint DEFAULT 0::smallint NOT NULL,
    expiration timestamp(0) without time zone DEFAULT NULL::timestamp without time zone,
    token character varying(32) DEFAULT NULL::character varying,
    mail_send smallint DEFAULT 0::smallint NOT NULL
);


ALTER TABLE public.oc_share OWNER TO blimp;

--
-- Name: oc_share_id_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_share_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_share_id_seq OWNER TO blimp;

--
-- Name: oc_share_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_share_id_seq OWNED BY oc_share.id;


--
-- Name: oc_storages; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_storages (
    id character varying(64) DEFAULT NULL::character varying,
    numeric_id integer NOT NULL
);


ALTER TABLE public.oc_storages OWNER TO blimp;

--
-- Name: oc_storages_numeric_id_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_storages_numeric_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_storages_numeric_id_seq OWNER TO blimp;

--
-- Name: oc_storages_numeric_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_storages_numeric_id_seq OWNED BY oc_storages.numeric_id;


--
-- Name: oc_users; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_users (
    uid character varying(64) DEFAULT ''::character varying NOT NULL,
    displayname character varying(64) DEFAULT NULL::character varying,
    password character varying(255) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.oc_users OWNER TO blimp;

--
-- Name: oc_vcategory; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_vcategory (
    id integer NOT NULL,
    uid character varying(64) DEFAULT ''::character varying NOT NULL,
    type character varying(64) DEFAULT ''::character varying NOT NULL,
    category character varying(255) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.oc_vcategory OWNER TO blimp;

--
-- Name: oc_vcategory_id_seq; Type: SEQUENCE; Schema: public; Owner: blimp
--

CREATE SEQUENCE oc_vcategory_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oc_vcategory_id_seq OWNER TO blimp;

--
-- Name: oc_vcategory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: blimp
--

ALTER SEQUENCE oc_vcategory_id_seq OWNED BY oc_vcategory.id;


--
-- Name: oc_vcategory_to_object; Type: TABLE; Schema: public; Owner: blimp; Tablespace: 
--

CREATE TABLE oc_vcategory_to_object (
    objid integer DEFAULT 0 NOT NULL,
    categoryid integer DEFAULT 0 NOT NULL,
    type character varying(64) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.oc_vcategory_to_object OWNER TO blimp;

--
-- Name: activity_id; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_activity ALTER COLUMN activity_id SET DEFAULT nextval('oc_activity_activity_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_clndr_calendars ALTER COLUMN id SET DEFAULT nextval('oc_clndr_calendars_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_clndr_objects ALTER COLUMN id SET DEFAULT nextval('oc_clndr_objects_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_clndr_repeat ALTER COLUMN id SET DEFAULT nextval('oc_clndr_repeat_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_contacts_addressbooks ALTER COLUMN id SET DEFAULT nextval('oc_contacts_addressbooks_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_contacts_cards ALTER COLUMN id SET DEFAULT nextval('oc_contacts_cards_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_contacts_cards_properties ALTER COLUMN id SET DEFAULT nextval('oc_contacts_cards_properties_id_seq'::regclass);


--
-- Name: member_id; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_documents_member ALTER COLUMN member_id SET DEFAULT nextval('oc_documents_member_member_id_seq'::regclass);


--
-- Name: seq; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_documents_op ALTER COLUMN seq SET DEFAULT nextval('oc_documents_op_seq_seq'::regclass);


--
-- Name: fileid; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_filecache ALTER COLUMN fileid SET DEFAULT nextval('oc_filecache_fileid_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_jobs ALTER COLUMN id SET DEFAULT nextval('oc_jobs_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_locks ALTER COLUMN id SET DEFAULT nextval('oc_locks_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_mimetypes ALTER COLUMN id SET DEFAULT nextval('oc_mimetypes_id_seq'::regclass);


--
-- Name: keyid; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_privatedata ALTER COLUMN keyid SET DEFAULT nextval('oc_privatedata_keyid_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_properties ALTER COLUMN id SET DEFAULT nextval('oc_properties_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_share ALTER COLUMN id SET DEFAULT nextval('oc_share_id_seq'::regclass);


--
-- Name: numeric_id; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_storages ALTER COLUMN numeric_id SET DEFAULT nextval('oc_storages_numeric_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: blimp
--

ALTER TABLE ONLY oc_vcategory ALTER COLUMN id SET DEFAULT nextval('oc_vcategory_id_seq'::regclass);


--
-- Data for Name: oc_activity; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_activity (activity_id, "timestamp", priority, type, "user", affecteduser, app, subject, subjectparams, message, messageparams, file, link) FROM stdin;
\.


--
-- Name: oc_activity_activity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_activity_activity_id_seq', 1, false);


--
-- Data for Name: oc_appconfig; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_appconfig (appid, configkey, configvalue) FROM stdin;
core	installedat	1399325126.2001
core	remote_core.css	/core/minimizer.php
core	remote_core.js	/core/minimizer.php
gallery	installed_version	0.5.3
core	public_gallery	gallery/public.php
gallery	types	filesystem
gallery	enabled	yes
files_pdfviewer	installed_version	0.3
files_pdfviewer	types	
files_pdfviewer	enabled	yes
files_sharing	installed_version	0.3.5
core	public_files	files_sharing/public.php
core	public_webdav	files_sharing/public.php
files_sharing	types	filesystem
files_sharing	enabled	yes
files_versions	installed_version	1.0.3
files_versions	types	filesystem
files_versions	enabled	yes
files_trashbin	installed_version	0.5
files_trashbin	types	filesystem
files_trashbin	enabled	yes
contacts	installed_version	0.3
core	remote_contacts	contacts/appinfo/remote.php
core	remote_carddav	contacts/appinfo/remote.php
contacts	types	
contacts	enabled	yes
documents	installed_version	0.8.1
core	public_documents	documents/public.php
documents	types	
documents	enabled	yes
files_videoviewer	installed_version	0.1.2
files_videoviewer	types	
files_videoviewer	enabled	yes
updater	installed_version	0.3
updater	types	
updater	enabled	yes
files_texteditor	installed_version	0.3
files_texteditor	types	
files_texteditor	enabled	yes
firstrunwizard	installed_version	1.0
firstrunwizard	types	
firstrunwizard	enabled	yes
activity	installed_version	1.1.2
activity	types	filesystem
activity	enabled	yes
files	installed_version	1.1.7
core	remote_files	files/appinfo/remote.php
core	remote_webdav	files/appinfo/remote.php
core	remote_filesync	files/appinfo/filesync.php
files	types	filesystem
files	enabled	yes
search_lucene	installed_version	0.5.2
search_lucene	types	filesystem
search_lucene	enabled	yes
calendar	installed_version	0.6.3
core	remote_calendar	calendar/appinfo/remote.php
core	remote_caldav	calendar/appinfo/remote.php
core	public_calendar	calendar/share.php
core	public_caldav	calendar/share.php
calendar	types	
calendar	enabled	yes
core	lastupdatedat	1399385872
core	lastupdateResult	{"version":{},"versionstring":{},"url":{},"web":{}}
core	global_cache_gc_lastrun	1399385881
user_ldap	installed_version	0.4.1
user_ldap	types	authentication
user_ldap	enabled	yes
files	backgroundwatcher_previous_file	9
files	backgroundwatcher_previous_folder	2
user_ldap	ldap_attributes_for_user_search	
user_ldap	ldap_attributes_for_group_search	
user_ldap	has_memberof_filter_support	0
user_ldap	ldap_expert_username_attr	
user_ldap	ldap_expert_uuid_user_attr	
user_ldap	ldap_expert_uuid_group_attr	
user_ldap	last_jpegPhoto_lookup	0
user_ldap	ldap_host	localhost
user_ldap	ldap_login_filter_mode	0
user_ldap	ldap_loginfilter_email	0
user_ldap	ldap_loginfilter_username	1
user_ldap	ldap_loginfilter_attributes	
user_ldap	ldap_quota_attr	
user_ldap	ldap_quota_def	
user_ldap	ldap_cache_ttl	600
user_ldap	ldap_override_main_server	
user_ldap	ldap_configuration_active	0
user_ldap	ldap_userfilter_groups	
user_ldap	ldap_userlist_filter	(objectclass=*)
user_ldap	home_folder_naming_rule	
user_ldap	ldap_group_filter	
user_ldap	ldap_group_filter_mode	0
user_ldap	ldap_groupfilter_objectclass	
user_ldap	ldap_groupfilter_groups	
user_ldap	ldap_group_display_name	cn
user_ldap	ldap_group_member_assoc_attribute	uniqueMember
user_ldap	ldap_login_filter	
user_ldap	ldap_email_attr	
user_ldap	ldap_backup_host	
user_ldap	ldap_backup_port	
user_ldap	ldap_base	ou=users, dc=example, dc=com
user_ldap	ldap_base_users	
user_ldap	ldap_base_groups	
user_ldap	ldap_dn	
user_ldap	ldap_agent_password	
user_ldap	ldap_tls	1
user_ldap	ldap_port	389
user_ldap	ldap_turn_off_cert_check	0
user_ldap	ldap_display_name	displayname
user_ldap	ldap_userfilter_objectclass	
user_ldap	ldap_nocase	0
user_ldap	ldap_user_filter_mode	1
backgroundjob	lastjob	3
\.


--
-- Data for Name: oc_clndr_calendars; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_clndr_calendars (id, userid, displayname, uri, active, ctag, calendarorder, calendarcolor, timezone, components) FROM stdin;
\.


--
-- Name: oc_clndr_calendars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_clndr_calendars_id_seq', 1, false);


--
-- Data for Name: oc_clndr_objects; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_clndr_objects (id, calendarid, objecttype, startdate, enddate, repeating, summary, calendardata, uri, lastmodified) FROM stdin;
\.


--
-- Name: oc_clndr_objects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_clndr_objects_id_seq', 1, false);


--
-- Data for Name: oc_clndr_repeat; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_clndr_repeat (id, eventid, calid, startdate, enddate) FROM stdin;
\.


--
-- Name: oc_clndr_repeat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_clndr_repeat_id_seq', 1, false);


--
-- Data for Name: oc_clndr_share_calendar; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_clndr_share_calendar (owner, share, sharetype, calendarid, permissions, active) FROM stdin;
\.


--
-- Data for Name: oc_clndr_share_event; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_clndr_share_event (owner, share, sharetype, eventid, permissions) FROM stdin;
\.


--
-- Data for Name: oc_contacts_addressbooks; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_contacts_addressbooks (id, userid, displayname, uri, description, ctag, active) FROM stdin;
1	blimp_admin	Contacts	contacts		1399325126	1
\.


--
-- Name: oc_contacts_addressbooks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_contacts_addressbooks_id_seq', 1, true);


--
-- Data for Name: oc_contacts_cards; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_contacts_cards (id, addressbookid, fullname, carddata, uri, lastmodified) FROM stdin;
\.


--
-- Name: oc_contacts_cards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_contacts_cards_id_seq', 1, false);


--
-- Data for Name: oc_contacts_cards_properties; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_contacts_cards_properties (id, userid, contactid, name, value, preferred) FROM stdin;
\.


--
-- Name: oc_contacts_cards_properties_id_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_contacts_cards_properties_id_seq', 1, false);


--
-- Data for Name: oc_documents_invite; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_documents_invite (es_id, uid, status, sent_on) FROM stdin;
\.


--
-- Data for Name: oc_documents_member; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_documents_member (member_id, es_id, uid, color, last_activity, is_guest, token, status) FROM stdin;
\.


--
-- Name: oc_documents_member_member_id_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_documents_member_member_id_seq', 1, false);


--
-- Data for Name: oc_documents_op; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_documents_op (seq, es_id, member, opspec) FROM stdin;
\.


--
-- Name: oc_documents_op_seq_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_documents_op_seq_seq', 1, false);


--
-- Data for Name: oc_documents_revisions; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_documents_revisions (es_id, seq_head, member_id, file_id, save_hash) FROM stdin;
\.


--
-- Data for Name: oc_documents_session; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_documents_session (es_id, genesis_url, genesis_hash, file_id, owner) FROM stdin;
\.


--
-- Data for Name: oc_file_map; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_file_map (logic_path, logic_path_hash, physic_path, physic_path_hash) FROM stdin;
\.


--
-- Data for Name: oc_filecache; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_filecache (fileid, storage, path, path_hash, parent, name, mimetype, mimepart, size, mtime, storage_mtime, encrypted, unencrypted_size, etag) FROM stdin;
5	1	files/ownCloudUserManual.pdf	c8edba2d1b8eb651c107b43532c34445	2	ownCloudUserManual.pdf	4	3	1572005	1399325127	1399325127	0	0	5368ef10be8ab
9	1	thumbnails/5/36-36.png	65d66e13bd9ea4b818e2bcd4922ceed3	8	36-36.png	6	5	855	1399385874	1399385874	0	0	5368ef126877c
8	1	thumbnails/5	5a879f415920ad2c9f9ab5a8d20995d4	7	5	2	1	855	1399385874	1399385874	0	0	5368ef1267b12
7	1	thumbnails	3b8779ba05b8f0aed49650f3ff8beb4b	1	thumbnails	2	1	855	1399385874	1399385874	0	0	5368ef121ab26
10	1	files/music/projekteva-letitrain.mp3	da7d05a957a2bbbf0e74b12c1b5fcfee	6	projekteva-letitrain.mp3	8	7	3764804	1399325127	1399325127	0	0	5368ef126d937
6	1	files/music	1f8cfec283cd675038bb95b599fdc75a	2	music	2	1	3764804	1399325127	1399325127	0	0	5368ef10bef5e
11	1	files/documents/example.odt	f51311bd6910ec7356d79286dcb24dec	4	example.odt	9	3	23383	1399325127	1399325127	0	0	5368ef1273b5a
4	1	files/documents	2d30f25cef1a92db784bc537e8bf128d	2	documents	2	1	23383	1399325127	1399325127	0	0	5368ef10bd66d
12	1	files/photos/squirrel.jpg	e462c24fc17cb1a3fa3bca86d7f89593	3	squirrel.jpg	10	5	233724	1399325127	1399325127	0	0	5368ef1279ce5
13	1	files/photos/paris.jpg	65154b90b985bff20d4923f224ca1c33	3	paris.jpg	10	5	228761	1399325127	1399325127	0	0	5368ef127a48f
14	1	files/photos/san francisco.jpg	e86e87a4ecd557753734e1d34fbeecec	3	san francisco.jpg	10	5	216071	1399325127	1399325127	0	0	5368ef127c1eb
3	1	files/photos	923e51351db3e8726f22ba0fa1c04d5a	2	photos	2	1	678556	1399325127	1399325127	0	0	5368ef10bc739
2	1	files	45b963397aa40d4a0063e0d85e4fe7a1	1	files	2	1	6038748	1399325127	1399325127	0	0	5368ef10b5975
1	1		d41d8cd98f00b204e9800998ecf8427e	-1		2	1	6039603	1399385874	1399385874	0	0	5368ef1219fcf
\.


--
-- Name: oc_filecache_fileid_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_filecache_fileid_seq', 14, true);


--
-- Data for Name: oc_files_trash; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_files_trash (id, "user", "timestamp", location, type, mime) FROM stdin;
\.


--
-- Data for Name: oc_files_trashsize; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_files_trashsize ("user", size) FROM stdin;
\.


--
-- Data for Name: oc_files_versions; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_files_versions ("user", size) FROM stdin;
\.


--
-- Data for Name: oc_gallery_sharing; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_gallery_sharing (token, gallery_id, recursive) FROM stdin;
\.


--
-- Data for Name: oc_group_admin; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_group_admin (gid, uid) FROM stdin;
\.


--
-- Data for Name: oc_group_user; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_group_user (gid, uid) FROM stdin;
admin	blimp_admin
\.


--
-- Data for Name: oc_groups; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_groups (gid) FROM stdin;
admin
\.


--
-- Data for Name: oc_jobs; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_jobs (id, class, argument, last_run) FROM stdin;
1	OC\\Cache\\FileGlobalGC	null	1399385881
2	OC\\BackgroundJob\\Legacy\\RegularJob	["\\\\OC\\\\Files\\\\Cache\\\\BackgroundWatcher","checkNext"]	1399385979
3	OCA\\user_ldap\\lib\\Jobs	null	1399386219
\.


--
-- Name: oc_jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_jobs_id_seq', 3, true);


--
-- Data for Name: oc_ldap_group_mapping; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_ldap_group_mapping (ldap_dn, owncloud_name, directory_uuid) FROM stdin;
\.


--
-- Data for Name: oc_ldap_group_members; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_ldap_group_members (owncloudname, owncloudusers) FROM stdin;
\.


--
-- Data for Name: oc_ldap_user_mapping; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_ldap_user_mapping (ldap_dn, owncloud_name, directory_uuid) FROM stdin;
\.


--
-- Data for Name: oc_locks; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_locks (id, userid, owner, timeout, created, token, scope, depth, uri) FROM stdin;
\.


--
-- Name: oc_locks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_locks_id_seq', 1, false);


--
-- Data for Name: oc_lucene_status; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_lucene_status (fileid, status) FROM stdin;
\.


--
-- Data for Name: oc_mimetypes; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_mimetypes (id, mimetype) FROM stdin;
1	httpd
2	httpd/unix-directory
3	application
4	application/pdf
5	image
6	image/png
7	audio
8	audio/mpeg
9	application/vnd.oasis.opendocument.text
10	image/jpeg
\.


--
-- Name: oc_mimetypes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_mimetypes_id_seq', 10, true);


--
-- Data for Name: oc_permissions; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_permissions (fileid, "user", permissions) FROM stdin;
5	blimp_admin	27
2	blimp_admin	31
\.


--
-- Data for Name: oc_pictures_images_cache; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_pictures_images_cache (uid_owner, path, width, height) FROM stdin;
\.


--
-- Data for Name: oc_preferences; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_preferences (userid, appid, configkey, configvalue) FROM stdin;
blimp_admin	files	cache_version	5
blimp_admin	firstrunwizard	show	0
\.


--
-- Data for Name: oc_privatedata; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_privatedata (keyid, "user", app, key, value) FROM stdin;
\.


--
-- Name: oc_privatedata_keyid_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_privatedata_keyid_seq', 1, false);


--
-- Data for Name: oc_properties; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_properties (id, userid, propertypath, propertyname, propertyvalue) FROM stdin;
\.


--
-- Name: oc_properties_id_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_properties_id_seq', 1, false);


--
-- Data for Name: oc_share; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_share (id, share_type, share_with, uid_owner, parent, item_type, item_source, item_target, file_source, file_target, permissions, stime, accepted, expiration, token, mail_send) FROM stdin;
\.


--
-- Name: oc_share_id_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_share_id_seq', 1, false);


--
-- Data for Name: oc_storages; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_storages (id, numeric_id) FROM stdin;
home::blimp_admin	1
\.


--
-- Name: oc_storages_numeric_id_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_storages_numeric_id_seq', 1, true);


--
-- Data for Name: oc_users; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_users (uid, displayname, password) FROM stdin;
blimp_admin	\N	$2a$08$cQZVkjQfNQqUvi2LcuM.M.v5wj8veTxjrXpN2a2h46IdSdqf6kxjS
\.


--
-- Data for Name: oc_vcategory; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_vcategory (id, uid, type, category) FROM stdin;
\.


--
-- Name: oc_vcategory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: blimp
--

SELECT pg_catalog.setval('oc_vcategory_id_seq', 1, false);


--
-- Data for Name: oc_vcategory_to_object; Type: TABLE DATA; Schema: public; Owner: blimp
--

COPY oc_vcategory_to_object (objid, categoryid, type) FROM stdin;
\.


--
-- Name: oc_activity_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_activity
    ADD CONSTRAINT oc_activity_pkey PRIMARY KEY (activity_id);


--
-- Name: oc_appconfig_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_appconfig
    ADD CONSTRAINT oc_appconfig_pkey PRIMARY KEY (appid, configkey);


--
-- Name: oc_clndr_calendars_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_clndr_calendars
    ADD CONSTRAINT oc_clndr_calendars_pkey PRIMARY KEY (id);


--
-- Name: oc_clndr_objects_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_clndr_objects
    ADD CONSTRAINT oc_clndr_objects_pkey PRIMARY KEY (id);


--
-- Name: oc_clndr_repeat_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_clndr_repeat
    ADD CONSTRAINT oc_clndr_repeat_pkey PRIMARY KEY (id);


--
-- Name: oc_contacts_addressbooks_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_contacts_addressbooks
    ADD CONSTRAINT oc_contacts_addressbooks_pkey PRIMARY KEY (id);


--
-- Name: oc_contacts_cards_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_contacts_cards
    ADD CONSTRAINT oc_contacts_cards_pkey PRIMARY KEY (id);


--
-- Name: oc_contacts_cards_properties_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_contacts_cards_properties
    ADD CONSTRAINT oc_contacts_cards_properties_pkey PRIMARY KEY (id);


--
-- Name: oc_documents_member_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_documents_member
    ADD CONSTRAINT oc_documents_member_pkey PRIMARY KEY (member_id);


--
-- Name: oc_documents_op_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_documents_op
    ADD CONSTRAINT oc_documents_op_pkey PRIMARY KEY (seq);


--
-- Name: oc_documents_session_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_documents_session
    ADD CONSTRAINT oc_documents_session_pkey PRIMARY KEY (es_id);


--
-- Name: oc_file_map_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_file_map
    ADD CONSTRAINT oc_file_map_pkey PRIMARY KEY (logic_path_hash);


--
-- Name: oc_filecache_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_filecache
    ADD CONSTRAINT oc_filecache_pkey PRIMARY KEY (fileid);


--
-- Name: oc_group_admin_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_group_admin
    ADD CONSTRAINT oc_group_admin_pkey PRIMARY KEY (gid, uid);


--
-- Name: oc_group_user_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_group_user
    ADD CONSTRAINT oc_group_user_pkey PRIMARY KEY (gid, uid);


--
-- Name: oc_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_groups
    ADD CONSTRAINT oc_groups_pkey PRIMARY KEY (gid);


--
-- Name: oc_jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_jobs
    ADD CONSTRAINT oc_jobs_pkey PRIMARY KEY (id);


--
-- Name: oc_locks_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_locks
    ADD CONSTRAINT oc_locks_pkey PRIMARY KEY (id);


--
-- Name: oc_lucene_status_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_lucene_status
    ADD CONSTRAINT oc_lucene_status_pkey PRIMARY KEY (fileid);


--
-- Name: oc_mimetypes_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_mimetypes
    ADD CONSTRAINT oc_mimetypes_pkey PRIMARY KEY (id);


--
-- Name: oc_preferences_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_preferences
    ADD CONSTRAINT oc_preferences_pkey PRIMARY KEY (userid, appid, configkey);


--
-- Name: oc_privatedata_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_privatedata
    ADD CONSTRAINT oc_privatedata_pkey PRIMARY KEY (keyid);


--
-- Name: oc_properties_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_properties
    ADD CONSTRAINT oc_properties_pkey PRIMARY KEY (id);


--
-- Name: oc_share_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_share
    ADD CONSTRAINT oc_share_pkey PRIMARY KEY (id);


--
-- Name: oc_storages_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_storages
    ADD CONSTRAINT oc_storages_pkey PRIMARY KEY (numeric_id);


--
-- Name: oc_users_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_users
    ADD CONSTRAINT oc_users_pkey PRIMARY KEY (uid);


--
-- Name: oc_vcategory_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_vcategory
    ADD CONSTRAINT oc_vcategory_pkey PRIMARY KEY (id);


--
-- Name: oc_vcategory_to_object_pkey; Type: CONSTRAINT; Schema: public; Owner: blimp; Tablespace: 
--

ALTER TABLE ONLY oc_vcategory_to_object
    ADD CONSTRAINT oc_vcategory_to_object_pkey PRIMARY KEY (categoryid, objid, type);


--
-- Name: appconfig_config_key_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX appconfig_config_key_index ON oc_appconfig USING btree (configkey);


--
-- Name: category_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX category_index ON oc_vcategory USING btree (category);


--
-- Name: cp_name_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX cp_name_index ON oc_contacts_cards_properties USING btree (name);


--
-- Name: cp_value_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX cp_value_index ON oc_contacts_cards_properties USING btree (value);


--
-- Name: documents_op_eis_idx; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE UNIQUE INDEX documents_op_eis_idx ON oc_documents_op USING btree (es_id, seq);


--
-- Name: documents_rev_eis_idx; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE UNIQUE INDEX documents_rev_eis_idx ON oc_documents_revisions USING btree (es_id, seq_head);


--
-- Name: file_map_pp_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE UNIQUE INDEX file_map_pp_index ON oc_file_map USING btree (physic_path_hash);


--
-- Name: file_source_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX file_source_index ON oc_share USING btree (file_source);


--
-- Name: fs_parent_name_hash; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX fs_parent_name_hash ON oc_filecache USING btree (parent, name);


--
-- Name: fs_storage_mimepart; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX fs_storage_mimepart ON oc_filecache USING btree (storage, mimepart);


--
-- Name: fs_storage_mimetype; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX fs_storage_mimetype ON oc_filecache USING btree (storage, mimetype);


--
-- Name: fs_storage_path_hash; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE UNIQUE INDEX fs_storage_path_hash ON oc_filecache USING btree (storage, path_hash);


--
-- Name: group_admin_uid; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX group_admin_uid ON oc_group_admin USING btree (uid);


--
-- Name: id_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX id_index ON oc_files_trash USING btree (id);


--
-- Name: id_user_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX id_user_index ON oc_permissions USING btree (fileid, "user");


--
-- Name: item_share_type_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX item_share_type_index ON oc_share USING btree (item_type, share_type);


--
-- Name: job_class_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX job_class_index ON oc_jobs USING btree (class);


--
-- Name: ldap_dn_groups; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE UNIQUE INDEX ldap_dn_groups ON oc_ldap_group_mapping USING btree (ldap_dn);


--
-- Name: ldap_dn_users; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE UNIQUE INDEX ldap_dn_users ON oc_ldap_user_mapping USING btree (ldap_dn);


--
-- Name: ldap_group_members_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE UNIQUE INDEX ldap_group_members_index ON oc_ldap_group_members USING btree (owncloudname);


--
-- Name: mimetype_id_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE UNIQUE INDEX mimetype_id_index ON oc_mimetypes USING btree (mimetype);


--
-- Name: owncloud_name_groups; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE UNIQUE INDEX owncloud_name_groups ON oc_ldap_group_mapping USING btree (owncloud_name);


--
-- Name: owncloud_name_users; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE UNIQUE INDEX owncloud_name_users ON oc_ldap_user_mapping USING btree (owncloud_name);


--
-- Name: property_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX property_index ON oc_properties USING btree (userid);


--
-- Name: status_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX status_index ON oc_lucene_status USING btree (status);


--
-- Name: storages_id_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE UNIQUE INDEX storages_id_index ON oc_storages USING btree (id);


--
-- Name: timestamp_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX timestamp_index ON oc_files_trash USING btree ("timestamp");


--
-- Name: token_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX token_index ON oc_share USING btree (token);


--
-- Name: type_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX type_index ON oc_vcategory USING btree (type);


--
-- Name: uid_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX uid_index ON oc_vcategory USING btree (uid);


--
-- Name: user_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX user_index ON oc_files_trash USING btree ("user");


--
-- Name: vcategory_objectd_index; Type: INDEX; Schema: public; Owner: blimp; Tablespace: 
--

CREATE INDEX vcategory_objectd_index ON oc_vcategory_to_object USING btree (objid, type);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

