/* SPDX-FileCopyrightText: 2013 Blender Authors
 *
 * SPDX-License-Identifier: GPL-2.0-or-later */

/** \file
 * \ingroup depsgraph
 *
 * Public API for Depsgraph
 */

#pragma once

#include "BLI_sys_types.h"

/* ************************************************* */

/* Dependency Graph */
struct Depsgraph;

/* ------------------------------------------------ */

struct CacheFile;
struct Collection;
struct CustomData_MeshMasks;
struct ID;
struct Main;
struct Object;
struct Scene;
struct bNodeTree;

/* Graph Building -------------------------------- */

/** Build depsgraph for the given scene layer, and dump results in given graph container. */
void DEG_graph_build_from_view_layer(Depsgraph *graph);

/**
 * Build depsgraph for all objects (so also invisible ones) in the given view layer.
 */
void DEG_graph_build_for_all_objects(Depsgraph *graph);

/**
 * Special version of builder which produces dependency graph suitable for the render pipeline.
 * It will contain sequencer and compositor (if needed) and all their dependencies.
 */
void DEG_graph_build_for_render_pipeline(Depsgraph *graph);

/**
 * Builds minimal dependency graph for compositor preview.
 *
 * Note that compositor editor might have pinned node tree, which is different from scene's node
 * tree.
 */
void DEG_graph_build_for_compositor_preview(Depsgraph *graph, bNodeTree *nodetree);

/**
 * Builds the minimal dependency graph needed for evaluation of the given IDs.
 */
void DEG_graph_build_from_ids(Depsgraph *graph, ID **ids, int num_ids);

/** Tag relations from the given graph for update. */
void DEG_graph_tag_relations_update(Depsgraph *graph);

/** Create or update relations in the specified graph. */
void DEG_graph_relations_update(Depsgraph *graph);

/** Tag all relations in the database for update. */
void DEG_relations_tag_update(Main *bmain);

/* Add Dependencies  ----------------------------- */

/**
 * Handle for components to define their dependencies from callbacks.
 * This is generated by the depsgraph and passed to dependency callbacks
 * as a symbolic reference to the current DepsNode.
 * All relations will be defined in reference to that node.
 */
struct DepsNodeHandle;

enum eDepsSceneComponentType {
  /* Parameters Component - Default when nothing else fits
   * (i.e. just SDNA property setting). */
  DEG_SCENE_COMP_PARAMETERS,
  /* Animation Component
   * TODO(sergey): merge in with parameters? */
  DEG_SCENE_COMP_ANIMATION,
  /* Sequencer Component (Scene Only). */
  DEG_SCENE_COMP_SEQUENCER,
};

enum eDepsObjectComponentType {
  /* Used in query API, to denote which component caller is interested in. */
  DEG_OB_COMP_ANY,

  /* Parameters Component - Default when nothing else fits
   * (i.e. just SDNA property setting). */
  DEG_OB_COMP_PARAMETERS,
  /* Animation Component.
   *
   * TODO(sergey): merge in with parameters? */
  DEG_OB_COMP_ANIMATION,
  /* Transform Component (Parenting/Constraints) */
  DEG_OB_COMP_TRANSFORM,
  /* Geometry Component (#Mesh / #Curves, etc.). */
  DEG_OB_COMP_GEOMETRY,

  /* Evaluation-Related Outer Types (with Sub-data) */

  /* Pose Component - Owner/Container of Bones Eval */
  DEG_OB_COMP_EVAL_POSE,
  /* Bone Component - Child/Sub-component of Pose */
  DEG_OB_COMP_BONE,

  /* Material Shading Component */
  DEG_OB_COMP_SHADING,
  /* Cache Component */
  DEG_OB_COMP_CACHE,
};

void DEG_add_scene_relation(DepsNodeHandle *node_handle,
                            Scene *scene,
                            eDepsSceneComponentType component,
                            const char *description);
void DEG_add_scene_camera_relation(DepsNodeHandle *node_handle,
                                   Scene *scene,
                                   eDepsObjectComponentType component,
                                   const char *description);
void DEG_add_object_relation(DepsNodeHandle *node_handle,
                             Object *object,
                             eDepsObjectComponentType component,
                             const char *description);
void DEG_add_collection_geometry_relation(DepsNodeHandle *node_handle,
                                          Collection *collection,
                                          const char *description);
void DEG_add_collection_geometry_customdata_mask(DepsNodeHandle *node_handle,
                                                 Collection *collection,
                                                 const CustomData_MeshMasks *masks);
void DEG_add_node_tree_output_relation(DepsNodeHandle *node_handle,
                                       bNodeTree *node_tree,
                                       const char *description);
void DEG_add_bone_relation(DepsNodeHandle *handle,
                           Object *object,
                           const char *bone_name,
                           eDepsObjectComponentType component,
                           const char *description);
void DEG_add_object_cache_relation(DepsNodeHandle *handle,
                                   CacheFile *cache_file,
                                   eDepsObjectComponentType component,
                                   const char *description);
/**
 * Adds relation from #DEG_OPCODE_GENERIC_DATABLOCK_UPDATE of a given ID.
 * Is used for such entities as textures and images.
 */
void DEG_add_generic_id_relation(DepsNodeHandle *node_handle, ID *id, const char *description);

/**
 * Special function which is used from modifiers' #update_depsgraph() callback
 * to indicate that the modifier needs to know transformation of the object
 * which that modifier belongs to.
 * This function will take care of checking which operation is required to
 * have transformation for the modifier, taking into account possible simulation solvers.
 */
void DEG_add_depends_on_transform_relation(DepsNodeHandle *node_handle, const char *description);

/**
 * Adds relations from the given component of a given object to the given node
 * handle AND the component to the point cache component of the node's ID.
 */
void DEG_add_object_pointcache_relation(DepsNodeHandle *node_handle,
                                        Object *object,
                                        eDepsObjectComponentType component,
                                        const char *description);

void DEG_add_special_eval_flag(DepsNodeHandle *handle, ID *id, uint32_t flag);
void DEG_add_customdata_mask(DepsNodeHandle *handle,
                             Object *object,
                             const CustomData_MeshMasks *masks);

ID *DEG_get_id_from_handle(DepsNodeHandle *node_handle);
Depsgraph *DEG_get_graph_from_handle(DepsNodeHandle *node_handle);

bool DEG_object_has_geometry_component(Object *object);

/* ************************************************ */
