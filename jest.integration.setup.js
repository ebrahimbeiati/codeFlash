// Jest setup for integration tests (Next.js API routes)
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { ReadableStream, WritableStream, TransformStream } = require('stream/web');
global.ReadableStream = ReadableStream;
global.WritableStream = WritableStream;
global.TransformStream = TransformStream;

const { fetch, Request, Response, Headers } = require('undici');
global.fetch = fetch;
global.Request = Request;
global.Response = Response;
global.Headers = Headers;

// React testing library setup
const React = require('react');
require('@testing-library/jest-dom');

// Mock Next.js router, Link, localStorage, matchMedia, framer-motion, and canvas-confetti as needed 