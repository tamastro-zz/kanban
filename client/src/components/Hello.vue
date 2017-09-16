<template>
  <div class="hello ui centered grid">

    <div class="button row">
      <button class="massive ui button" @click="showmodal">
    Add Task
  </button>
    </div>
    <div class="kanban row">

      <div class="ui cards">
        <div class="card four wide column">
          <div class="content">
            <div class="header">Back-log</div>
            <div class="meta">Tasks</div>

            <div class="ui card" v-if="task.status == 'backlog'" v-for="task in tasks" :key="task['.key']">
              <div class="content">
                <div class="header">{{task.task}}</div>
              </div>
              <div class="content">
                <h4 class="ui sub header">Assigned To: {{task.asign}}</h4>
                <h4 class="ui sub header">Difficulty: {{task.difficulty}}</h4>
                <div class="ui small feed">
                  <div class="event">
                    <div class="content">
                      <div class="summary">
                        {{task.description}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="extra content">
                <div class="ui grid">

                  <div class="left floated six wide column"></div>
                  <button class="ui icon red button" @click="deletetask(task['.key'])">
                     <i class="trash icon"></i>
                    </button>
                  <div class="ui animated button right floated six wide column" tabindex="0" @click="totodo(task['.key'])">
                    <div class="visible content">Next</div>
                    <div class="hidden content">
                      <i class="right arrow icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="card four wide column">
          <div class="content">
            <div class="header">To-do</div>
            <div class="meta">Tasks</div>

            <div class="ui card" v-for="task in tasks" :key="task['.key']" v-if="task.status == 'todo'">
              <div class="content">
                <div class="header">{{task.task}}</div>
              </div>
              <div class="content">
                <h4 class="ui sub header">Assigned To: {{task.asign}}</h4>
                <h4 class="ui sub header">Difficulty: {{task.difficulty}}</h4>
                <div class="ui small feed">
                  <div class="event">
                    <div class="content">
                      <div class="summary">
                        {{task.description}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="extra content">
                <div class="ui grid">
                  <div class="ui animated button left floated six wide column" tabindex="0" @click="backbacklog(task['.key'])">
                    <div class="visible content">Previous</div>
                    <div class="hidden content">
                      <i class="left arrow icon"></i>
                    </div>
                  </div>
                  <button class="ui icon red button" @click="deletetask(task['.key'])">
                     <i class="trash icon"></i>
                    </button>
                  <div class="ui animated button right floated six wide column" tabindex="0" @click="todoing(task['.key'])">
                    <div class="visible content">Next</div>
                    <div class="hidden content">
                      <i class="right arrow icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="card four wide column">
          <div class="content">
            <div class="header">Doing</div>
            <div class="meta">Tasks</div>


            <div class="ui card" v-for="task in tasks" :key="task['.key']" v-if="task.status == 'doing'">
              <div class="content">
                <div class="header">{{task.task}}</div>
              </div>
              <div class="content">
                <h4 class="ui sub header">Assigned To: {{task.asign}}</h4>
                <h4 class="ui sub header">Difficulty: {{task.difficulty}}</h4>
                <div class="ui small feed">
                  <div class="event">
                    <div class="content">
                      <div class="summary">
                        {{task.description}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="extra content">
                <div class="ui grid">
                  <div class="ui animated button left floated six wide column" tabindex="0" @click="backtodo(task['.key'])">
                    <div class="visible content">Previous</div>
                    <div class="hidden content">
                      <i class="left arrow icon"></i>
                    </div>
                  </div>

                  <button class="ui icon red button" @click="deletetask(task['.key'])">
                     <i class="trash icon"></i>
                    </button>
                  <div class="ui animated button right floated six wide column" tabindex="0" @click="todone(task['.key'])">
                    <div class="visible content">Next</div>
                    <div class="hidden content">
                      <i class="right arrow icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div class="card four wide column">
          <div class="content">
            <div class="header">Done</div>
            <div class="meta">Tasks</div>

            <div class="ui card" v-for="task in tasks" :key="task['.key']" v-if="task.status == 'done'">
              <div class="content">
                <div class="header">{{task.task}}</div>
              </div>
              <div class="content">
                <h4 class="ui sub header">Assigned To: {{task.asign}}</h4>
                <h4 class="ui sub header">Difficulty: {{task.difficulty}}</h4>
                <div class="ui small feed">
                  <div class="event">
                    <div class="content">
                      <div class="summary">
                        {{task.description}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="extra content">
                <div class="ui grid">
                  <div class="ui animated button left floated six wide column" tabindex="0" @click="backdoing(task['.key'])">
                    <div class="visible content">Previous</div>
                    <div class="hidden content">
                      <i class="left arrow icon"></i>
                    </div>
                  </div>

                  <button class="ui icon red button" @click="deletetask(task['.key'])">
                     <i class="trash icon"></i>
                    </button>
                  <div class="left floated six wide column"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>


    <div class="ui modal">
      <i class="close icon"></i>
      <div class="header">
        Add Task
      </div>
      <div class="content">

        <form class="ui form">
          <div class="field">
            <label>Task Name</label>
            <input type="text" name="first-name" placeholder="Task Name" v-model="task">
          </div>
          <div class="field">
            <label>Assign To</label>
            <input type="text" name="last-name" placeholder="Assign To" v-model="assign">
          </div>

          <div class="field">
            <label>Description</label>
            <input type="text" name="last-name" placeholder="Description" v-model="desc">
          </div>

          <div class="field">
            <label>Difficulty</label>
            <input type="number" name="last-name" placeholder="Description" v-model="diff" max="10" min="1">
          </div>

        </form>

      </div>
      <div class="actions">
        <div class="ui black deny button">
          Cancel
        </div>
        <div class="ui positive right labeled icon button" @click="addtask">
          Submit
          <i class="add square icon"></i>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        task: '',
        assign: '',
        desc: '',
        diff: 0
      }
    },
    firebase() {
      return {
        tasks: {
          source: this.$db.ref('kanban')
        }
      }
    },
    methods: {
      showmodal() {
        $('.ui.modal')
          .modal('show');
      },
      drop() {
        $('select.dropdown')
          .dropdown();
      },
      addtask() {
        var add = {
          task: this.task,
          asign: this.assign,
          description: this.desc,
          difficulty: this.diff,
          status: 'backlog'
        }
        this.$db.ref('kanban').push(add)
        this.task = ''
        this.assign = ''
        this.diff = ''
        this.desc = ''
      },
      totodo(key) {
        this.$db.ref('kanban').child(key).child('status').set('todo')
      },
      backbacklog(key) {
        this.$db.ref('kanban').child(key).child('status').set('backlog')
      },
      todoing(key) {
        this.$db.ref('kanban').child(key).child('status').set('doing')
      },
      backtodo(key) {
        this.$db.ref('kanban').child(key).child('status').set('todo')
      },
      todone(key) {
        this.$db.ref('kanban').child(key).child('status').set('done')
      },
      backdoing(key) {
        this.$db.ref('kanban').child(key).child('status').set('doing')
      },
      deletetask(key) {
        this.$db.ref('kanban').child(key).remove()
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
