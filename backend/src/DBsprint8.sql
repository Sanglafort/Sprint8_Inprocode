-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-03-2024 a las 10:10:02
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sprint8`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos_felices`
--

CREATE TABLE `eventos_felices` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `lugar` varchar(30) NOT NULL,
  `fecha` date NOT NULL,
  `preinscripcion` varchar(2) NOT NULL,
  `precio` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos_felices`
--

INSERT INTO `eventos_felices` (`id`, `nombre`, `lugar`, `fecha`, `preinscripcion`, `precio`) VALUES
(1, 'Taller de risoterapia', 'Centre Cívic Fort Pienc', '2024-03-28', 'si', 5.00),
(2, 'Fiesta Pachanga', 'Pl. de la Vila de Gràcia', '2024-03-22', 'no', 0.00),
(3, 'Calçotada popular', 'AVV Poblenou', '2024-03-16', 'si', 3.00),
(4, 'Baño de bosque', 'Montseny', '2024-03-12', 'si', 10.00),
(6, 'Meditación grupal', 'La Clariana de Glòries', '2024-03-29', 'no', 0.00),
(28, 'cafe para todos', 'Starbucks', '2024-03-31', 'no', 0.00);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `eventos_felices`
--
ALTER TABLE `eventos_felices`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `eventos_felices`
--
ALTER TABLE `eventos_felices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
