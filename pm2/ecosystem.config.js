module.exports = {
  apps : [{
    name: 'Server',
    script: 'index.js',
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      PORT : 3000,
      NODE_ENV: 'development'
    },
    env_production: {
      PORT : 8055,
      NODE_ENV: 'production'
    }
  }],
};